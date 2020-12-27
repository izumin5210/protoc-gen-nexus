import ts from "typescript";
import { ProtoEnum, ProtoMessage } from "../protoTypes";
import { GenerationParams } from "./types";
import { getUnwrapFunc } from "./unwrap";
import {
  createImportAllWithAliastDecl,
  isRequiredField,
  onlyNonNull,
  onlyUnique,
  protoImportPath,
} from "./util";

/**
 * @example
 * ```ts
 * import { objectType, enumType } from "nexus";
 * ```
 */
export function createImportNexusDecl(
  msgs: ReadonlyArray<ProtoMessage>,
  enums: ReadonlyArray<ProtoEnum>
): ts.ImportDeclaration {
  let [oneof, list, nullable, nonNull] = [false, false, false, false];
  for (const m of msgs) {
    oneof ||= m.oneofs.length > 0;
    for (const f of m.fields) {
      if (f.isOneofMember()) continue;
      const required = isRequiredField(f);
      list ||= f.isList();
      nullable ||= !required;
      nonNull ||= f.isList() || required;
    }
    for (const o of m.oneofs) {
      const required = isRequiredField(o);
      nullable ||= !required;
      nonNull ||= required;
    }
    if (oneof && list && nullable && nonNull) break;
  }

  return ts.factory.createImportDeclaration(
    undefined,
    undefined,
    ts.factory.createImportClause(
      false,
      undefined,
      ts.factory.createNamedImports(
        [
          msgs.length > 0 ? createImportSpecifier("objectType") : null,
          msgs.length > 0 ? createImportSpecifier("inputObjectType") : null,
          enums.length > 0 ? createImportSpecifier("enumType") : null,
          oneof ? createImportSpecifier("unionType") : null,
          list ? createImportSpecifier("list") : null,
          nullable ? createImportSpecifier("nullable") : null,
          nonNull ? createImportSpecifier("nonNull") : null,
        ].filter(onlyNonNull())
      )
    ),
    ts.factory.createStringLiteral("nexus")
  );
}

/**
 * @example
 * ```
 * import * as proto_nexus from "proto-nexus";
 * ```
 */
export function createImportUnwrapFuncDecls(
  msgs: ReadonlyArray<ProtoMessage>,
  opts: GenerationParams
): ts.ImportDeclaration[] {
  return msgs
    .flatMap((m) => m.fields)
    .flatMap((f) => getUnwrapFunc(f, opts)?.imports ?? [])
    .filter(onlyUnique())
    .map(createImportAllWithAliastDecl);
}

/**
 * @example js_out
 * ```
 * import * as _$hello$hello_pb from "./hello/hello_pb";
 * ```
 *
 * @example protobufjs
 * ```
 * import * as _$hello from "./hello";
 * ```
 */
export function createImportProtoDecls(
  msgs: ReadonlyArray<ProtoMessage>,
  opts: GenerationParams
): ts.ImportDeclaration[] {
  return msgs
    .map((m) => protoImportPath(m, opts))
    .filter(onlyUnique())
    .map(createImportAllWithAliastDecl);
}

function createImportSpecifier(name: string): ts.ImportSpecifier {
  return ts.factory.createImportSpecifier(
    undefined,
    ts.factory.createIdentifier(name)
  );
}

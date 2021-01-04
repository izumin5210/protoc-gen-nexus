import { FieldDescriptorProto } from "google-protobuf/google/protobuf/descriptor_pb";
import { ProtoField, ProtoRegistry } from "../protogen";
import { gqlTypeName, isRequiredField } from "./util";

export type GenerationParams = {
  importPrefix: string | null;
  useProtobufjs: boolean;
};

type GqlScalarType = "Int" | "Float" | "String" | "Boolean" | "ID" | "DateTime";

export type GqlItemType =
  | {
      kind: "scalar";
      type: GqlScalarType;
      nullable: boolean;
    }
  | {
      kind: "object";
      type: string;
      nullable: boolean;
    }
  | {
      kind: "enum";
      type: string;
      nullable: boolean;
    };

export type GqlType =
  | GqlItemType
  | {
      kind: "list";
      type: GqlItemType;
      nullable: boolean;
    };

export function detectGqlType(f: ProtoField, reg: ProtoRegistry, opts?: { input?: boolean }): GqlType {
  if (f.list) {
    return {
      kind: "list",
      type: detectGqlItemType(f, reg, opts),
      nullable: false,
    };
  }

  return detectGqlItemType(f, reg, opts);
}

function detectGqlItemType(f: ProtoField, reg: ProtoRegistry, opts?: { input?: boolean }): GqlItemType {
  const nullable = !isRequiredField(f);

  if (f.type?.kind === "Enum") {
    return {
      kind: "enum",
      type: gqlTypeName(f.type),
      nullable,
    };
  } else if (f.type?.kind === "Message") {
    switch (f.descriptor.getTypeName()) {
      case ".google.protobuf.Any":
        throw "not supported";
      case ".google.protobuf.BoolValue":
        return {
          kind: "scalar",
          type: "Boolean",
          nullable,
        };
      case ".google.protobuf.BytesValue":
        throw "not supported";
      case ".google.protobuf.DoubleValue":
      case ".google.protobuf.FloatValue":
        return {
          kind: "scalar",
          type: "Float",
          nullable,
        };
      case ".google.protobuf.Duration":
        throw "not implemented";
      case ".google.protobuf.Int32Value":
        return {
          kind: "scalar",
          type: "Int",
          nullable,
        };
      case ".google.protobuf.Int64Value":
        return {
          kind: "scalar",
          type: "String",
          nullable,
        };
      case ".google.protobuf.UInt32Value":
        return {
          kind: "scalar",
          type: "Int",
          nullable,
        };
      case ".google.protobuf.UInt64Value":
        return {
          kind: "scalar",
          type: "String",
          nullable,
        };
      case ".google.protobuf.StringValue":
        return {
          kind: "scalar",
          type: "String",
          nullable,
        };
      case ".google.protobuf.Timestamp":
        return {
          kind: "scalar",
          type: "DateTime",
          nullable,
        };
      default:
        return {
          kind: "object",
          type: gqlTypeName(f.type, opts),
          nullable,
        };
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const pbtype = f.descriptor.getType()!;
  switch (pbtype) {
    case FieldDescriptorProto.Type.TYPE_STRING:
      return { kind: "scalar", type: "String", nullable: false };
    case FieldDescriptorProto.Type.TYPE_DOUBLE:
    case FieldDescriptorProto.Type.TYPE_FLOAT:
      return { kind: "scalar", type: "Float", nullable: false };
    case FieldDescriptorProto.Type.TYPE_INT64:
      return { kind: "scalar", type: "String", nullable: false };
    case FieldDescriptorProto.Type.TYPE_UINT64:
      return { kind: "scalar", type: "String", nullable: false };
    case FieldDescriptorProto.Type.TYPE_INT32:
      return { kind: "scalar", type: "Int", nullable: false };
    case FieldDescriptorProto.Type.TYPE_FIXED64:
      return { kind: "scalar", type: "String", nullable: false };
    case FieldDescriptorProto.Type.TYPE_FIXED32:
      return { kind: "scalar", type: "Int", nullable: false };
    case FieldDescriptorProto.Type.TYPE_UINT32:
      return { kind: "scalar", type: "Int", nullable: false };
    case FieldDescriptorProto.Type.TYPE_SFIXED32:
      return { kind: "scalar", type: "Int", nullable: false };
    case FieldDescriptorProto.Type.TYPE_SFIXED64:
      return { kind: "scalar", type: "String", nullable: false };
    case FieldDescriptorProto.Type.TYPE_SINT32:
      return { kind: "scalar", type: "Int", nullable: false };
    case FieldDescriptorProto.Type.TYPE_SINT64:
      return { kind: "scalar", type: "String", nullable: false };
    case FieldDescriptorProto.Type.TYPE_BOOL:
      return { kind: "scalar", type: "Boolean", nullable: false };
    case FieldDescriptorProto.Type.TYPE_GROUP:
      throw "not supported";
    case FieldDescriptorProto.Type.TYPE_BYTES:
      throw "not supported";
    /* istanbul ignore next */
    case FieldDescriptorProto.Type.TYPE_ENUM:
      throw "unreachable";
    /* istanbul ignore next */
    case FieldDescriptorProto.Type.TYPE_MESSAGE:
      throw "unreachable";
    /* istanbul ignore next */
    default:
      const _exhaustiveCheck: never = pbtype; // eslint-disable-line
      throw "unreachable";
  }
}

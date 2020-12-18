// Code generated by protoc-gen-nexus. DO NOT EDIT.
// source: enums/enums.proto

import { objectType, enumType, nullable } from "nexus";
import * as $$testapis$node$lib$enums$enums_pb from "@testapis/node/lib/enums/enums_pb";
export type $$testapis$node$lib$enums$enums_pb$MessageWithEnums = $$testapis$node$lib$enums$enums_pb.MessageWithEnums;
export const MessageWithEnums = objectType({
    name: "MessageWithEnums",
    description: "",
    definition(t) {
        t.field("myEnum1", {
            type: nullable("MyEnum1"),
            description: "",
            resolve(root) { return root.getMyEnum1(); }
        });
    },
    sourceType: { module: __filename, export: "$$testapis$node$lib$enums$enums_pb$MessageWithEnums" }
});
export const MyEnum1 = enumType({
    name: "MyEnum1",
    description: "",
    members: [
        {
            name: "MY_ENUM_1_UNSPECIRED",
            value: 0
        },
        {
            name: "FOO",
            value: 1
        },
        {
            name: "BAR",
            description: "This is Bar.",
            value: 2
        },
        {
            name: "BAZ",
            value: 3
        }
    ]
});

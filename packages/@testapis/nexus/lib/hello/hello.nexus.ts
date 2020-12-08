// Code generated by protoc-gen-nexus. DO NOT EDIT.
// source: hello/hello.proto

import { objectType } from "@nexus/schema";
export const User = objectType({
    name: "User",
    description: "User entity",
    definition(t) {
        t.int("id", {
            nullable: false,
            description: "Required. Output only. ID.",
        });
        t.string("name", {
            nullable: false,
            description: "Required. User's login name.",
        });
        t.list.field("posts", {
            nullable: false,
            description: "Required. Posts that are written by the user.",
            type: ".testapi.hello.Post",
        });
    },
    rootTyping: { name: "User", path: "./hello/hello" },
});
export const Post = objectType({
    name: "Post",
    description: "Post entity",
    definition(t) {
        t.int("id", {
            nullable: false,
            description: "Required. Output only. ID.",
        });
        t.string("title", {
            nullable: false,
            description: "Required. Article.",
        });
        t.string("body", {
            nullable: false,
            description: "Required. Body.",
        });
        t.string("publishedTime", {
            nullable: false,
            description: "Required. Output only. Published time.",
        });
    },
    rootTyping: { name: "Post", path: "./hello/hello" },
});

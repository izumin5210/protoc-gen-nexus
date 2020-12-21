// source: field_behavior/comments.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.testapi.deprecation.FieldBehaviorComentsMessage', null, global);
goog.exportSymbol('proto.testapi.deprecation.FieldBehaviorComentsMessage.Post', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.testapi.deprecation.FieldBehaviorComentsMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.testapi.deprecation.FieldBehaviorComentsMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.testapi.deprecation.FieldBehaviorComentsMessage.displayName = 'proto.testapi.deprecation.FieldBehaviorComentsMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.testapi.deprecation.FieldBehaviorComentsMessage.Post = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.testapi.deprecation.FieldBehaviorComentsMessage.Post, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.testapi.deprecation.FieldBehaviorComentsMessage.Post.displayName = 'proto.testapi.deprecation.FieldBehaviorComentsMessage.Post';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.testapi.deprecation.FieldBehaviorComentsMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.testapi.deprecation.FieldBehaviorComentsMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.testapi.deprecation.FieldBehaviorComentsMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.testapi.deprecation.FieldBehaviorComentsMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    requiredField: (f = msg.getRequiredField()) && proto.testapi.deprecation.FieldBehaviorComentsMessage.Post.toObject(includeInstance, f),
    requiredOutputOnlyField: (f = msg.getRequiredOutputOnlyField()) && proto.testapi.deprecation.FieldBehaviorComentsMessage.Post.toObject(includeInstance, f),
    outputOnlyRequiredField: (f = msg.getOutputOnlyRequiredField()) && proto.testapi.deprecation.FieldBehaviorComentsMessage.Post.toObject(includeInstance, f),
    outputOnlyField: (f = msg.getOutputOnlyField()) && proto.testapi.deprecation.FieldBehaviorComentsMessage.Post.toObject(includeInstance, f),
    requiredInputOnlyField: (f = msg.getRequiredInputOnlyField()) && proto.testapi.deprecation.FieldBehaviorComentsMessage.Post.toObject(includeInstance, f),
    inputOnlyRequiredField: (f = msg.getInputOnlyRequiredField()) && proto.testapi.deprecation.FieldBehaviorComentsMessage.Post.toObject(includeInstance, f),
    inputOnlyField: (f = msg.getInputOnlyField()) && proto.testapi.deprecation.FieldBehaviorComentsMessage.Post.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.testapi.deprecation.FieldBehaviorComentsMessage}
 */
proto.testapi.deprecation.FieldBehaviorComentsMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.testapi.deprecation.FieldBehaviorComentsMessage;
  return proto.testapi.deprecation.FieldBehaviorComentsMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.testapi.deprecation.FieldBehaviorComentsMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.testapi.deprecation.FieldBehaviorComentsMessage}
 */
proto.testapi.deprecation.FieldBehaviorComentsMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.testapi.deprecation.FieldBehaviorComentsMessage.Post;
      reader.readMessage(value,proto.testapi.deprecation.FieldBehaviorComentsMessage.Post.deserializeBinaryFromReader);
      msg.setRequiredField(value);
      break;
    case 2:
      var value = new proto.testapi.deprecation.FieldBehaviorComentsMessage.Post;
      reader.readMessage(value,proto.testapi.deprecation.FieldBehaviorComentsMessage.Post.deserializeBinaryFromReader);
      msg.setRequiredOutputOnlyField(value);
      break;
    case 3:
      var value = new proto.testapi.deprecation.FieldBehaviorComentsMessage.Post;
      reader.readMessage(value,proto.testapi.deprecation.FieldBehaviorComentsMessage.Post.deserializeBinaryFromReader);
      msg.setOutputOnlyRequiredField(value);
      break;
    case 4:
      var value = new proto.testapi.deprecation.FieldBehaviorComentsMessage.Post;
      reader.readMessage(value,proto.testapi.deprecation.FieldBehaviorComentsMessage.Post.deserializeBinaryFromReader);
      msg.setOutputOnlyField(value);
      break;
    case 5:
      var value = new proto.testapi.deprecation.FieldBehaviorComentsMessage.Post;
      reader.readMessage(value,proto.testapi.deprecation.FieldBehaviorComentsMessage.Post.deserializeBinaryFromReader);
      msg.setRequiredInputOnlyField(value);
      break;
    case 6:
      var value = new proto.testapi.deprecation.FieldBehaviorComentsMessage.Post;
      reader.readMessage(value,proto.testapi.deprecation.FieldBehaviorComentsMessage.Post.deserializeBinaryFromReader);
      msg.setInputOnlyRequiredField(value);
      break;
    case 7:
      var value = new proto.testapi.deprecation.FieldBehaviorComentsMessage.Post;
      reader.readMessage(value,proto.testapi.deprecation.FieldBehaviorComentsMessage.Post.deserializeBinaryFromReader);
      msg.setInputOnlyField(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.testapi.deprecation.FieldBehaviorComentsMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.testapi.deprecation.FieldBehaviorComentsMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.testapi.deprecation.FieldBehaviorComentsMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.testapi.deprecation.FieldBehaviorComentsMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRequiredField();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.testapi.deprecation.FieldBehaviorComentsMessage.Post.serializeBinaryToWriter
    );
  }
  f = message.getRequiredOutputOnlyField();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.testapi.deprecation.FieldBehaviorComentsMessage.Post.serializeBinaryToWriter
    );
  }
  f = message.getOutputOnlyRequiredField();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.testapi.deprecation.FieldBehaviorComentsMessage.Post.serializeBinaryToWriter
    );
  }
  f = message.getOutputOnlyField();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.testapi.deprecation.FieldBehaviorComentsMessage.Post.serializeBinaryToWriter
    );
  }
  f = message.getRequiredInputOnlyField();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.testapi.deprecation.FieldBehaviorComentsMessage.Post.serializeBinaryToWriter
    );
  }
  f = message.getInputOnlyRequiredField();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.testapi.deprecation.FieldBehaviorComentsMessage.Post.serializeBinaryToWriter
    );
  }
  f = message.getInputOnlyField();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.testapi.deprecation.FieldBehaviorComentsMessage.Post.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.testapi.deprecation.FieldBehaviorComentsMessage.Post.prototype.toObject = function(opt_includeInstance) {
  return proto.testapi.deprecation.FieldBehaviorComentsMessage.Post.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.testapi.deprecation.FieldBehaviorComentsMessage.Post} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.testapi.deprecation.FieldBehaviorComentsMessage.Post.toObject = function(includeInstance, msg) {
  var f, obj = {
    body: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.testapi.deprecation.FieldBehaviorComentsMessage.Post}
 */
proto.testapi.deprecation.FieldBehaviorComentsMessage.Post.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.testapi.deprecation.FieldBehaviorComentsMessage.Post;
  return proto.testapi.deprecation.FieldBehaviorComentsMessage.Post.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.testapi.deprecation.FieldBehaviorComentsMessage.Post} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.testapi.deprecation.FieldBehaviorComentsMessage.Post}
 */
proto.testapi.deprecation.FieldBehaviorComentsMessage.Post.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setBody(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.testapi.deprecation.FieldBehaviorComentsMessage.Post.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.testapi.deprecation.FieldBehaviorComentsMessage.Post.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.testapi.deprecation.FieldBehaviorComentsMessage.Post} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.testapi.deprecation.FieldBehaviorComentsMessage.Post.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBody();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string body = 1;
 * @return {string}
 */
proto.testapi.deprecation.FieldBehaviorComentsMessage.Post.prototype.getBody = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.testapi.deprecation.FieldBehaviorComentsMessage.Post} returns this
 */
proto.testapi.deprecation.FieldBehaviorComentsMessage.Post.prototype.setBody = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Post required_field = 1;
 * @return {?proto.testapi.deprecation.FieldBehaviorComentsMessage.Post}
 */
proto.testapi.deprecation.FieldBehaviorComentsMessage.prototype.getRequiredField = function() {
  return /** @type{?proto.testapi.deprecation.FieldBehaviorComentsMessage.Post} */ (
    jspb.Message.getWrapperField(this, proto.testapi.deprecation.FieldBehaviorComentsMessage.Post, 1));
};


/**
 * @param {?proto.testapi.deprecation.FieldBehaviorComentsMessage.Post|undefined} value
 * @return {!proto.testapi.deprecation.FieldBehaviorComentsMessage} returns this
*/
proto.testapi.deprecation.FieldBehaviorComentsMessage.prototype.setRequiredField = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.testapi.deprecation.FieldBehaviorComentsMessage} returns this
 */
proto.testapi.deprecation.FieldBehaviorComentsMessage.prototype.clearRequiredField = function() {
  return this.setRequiredField(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.testapi.deprecation.FieldBehaviorComentsMessage.prototype.hasRequiredField = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Post required_output_only_field = 2;
 * @return {?proto.testapi.deprecation.FieldBehaviorComentsMessage.Post}
 */
proto.testapi.deprecation.FieldBehaviorComentsMessage.prototype.getRequiredOutputOnlyField = function() {
  return /** @type{?proto.testapi.deprecation.FieldBehaviorComentsMessage.Post} */ (
    jspb.Message.getWrapperField(this, proto.testapi.deprecation.FieldBehaviorComentsMessage.Post, 2));
};


/**
 * @param {?proto.testapi.deprecation.FieldBehaviorComentsMessage.Post|undefined} value
 * @return {!proto.testapi.deprecation.FieldBehaviorComentsMessage} returns this
*/
proto.testapi.deprecation.FieldBehaviorComentsMessage.prototype.setRequiredOutputOnlyField = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.testapi.deprecation.FieldBehaviorComentsMessage} returns this
 */
proto.testapi.deprecation.FieldBehaviorComentsMessage.prototype.clearRequiredOutputOnlyField = function() {
  return this.setRequiredOutputOnlyField(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.testapi.deprecation.FieldBehaviorComentsMessage.prototype.hasRequiredOutputOnlyField = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Post output_only_required_field = 3;
 * @return {?proto.testapi.deprecation.FieldBehaviorComentsMessage.Post}
 */
proto.testapi.deprecation.FieldBehaviorComentsMessage.prototype.getOutputOnlyRequiredField = function() {
  return /** @type{?proto.testapi.deprecation.FieldBehaviorComentsMessage.Post} */ (
    jspb.Message.getWrapperField(this, proto.testapi.deprecation.FieldBehaviorComentsMessage.Post, 3));
};


/**
 * @param {?proto.testapi.deprecation.FieldBehaviorComentsMessage.Post|undefined} value
 * @return {!proto.testapi.deprecation.FieldBehaviorComentsMessage} returns this
*/
proto.testapi.deprecation.FieldBehaviorComentsMessage.prototype.setOutputOnlyRequiredField = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.testapi.deprecation.FieldBehaviorComentsMessage} returns this
 */
proto.testapi.deprecation.FieldBehaviorComentsMessage.prototype.clearOutputOnlyRequiredField = function() {
  return this.setOutputOnlyRequiredField(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.testapi.deprecation.FieldBehaviorComentsMessage.prototype.hasOutputOnlyRequiredField = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Post output_only_field = 4;
 * @return {?proto.testapi.deprecation.FieldBehaviorComentsMessage.Post}
 */
proto.testapi.deprecation.FieldBehaviorComentsMessage.prototype.getOutputOnlyField = function() {
  return /** @type{?proto.testapi.deprecation.FieldBehaviorComentsMessage.Post} */ (
    jspb.Message.getWrapperField(this, proto.testapi.deprecation.FieldBehaviorComentsMessage.Post, 4));
};


/**
 * @param {?proto.testapi.deprecation.FieldBehaviorComentsMessage.Post|undefined} value
 * @return {!proto.testapi.deprecation.FieldBehaviorComentsMessage} returns this
*/
proto.testapi.deprecation.FieldBehaviorComentsMessage.prototype.setOutputOnlyField = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.testapi.deprecation.FieldBehaviorComentsMessage} returns this
 */
proto.testapi.deprecation.FieldBehaviorComentsMessage.prototype.clearOutputOnlyField = function() {
  return this.setOutputOnlyField(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.testapi.deprecation.FieldBehaviorComentsMessage.prototype.hasOutputOnlyField = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional Post required_input_only_field = 5;
 * @return {?proto.testapi.deprecation.FieldBehaviorComentsMessage.Post}
 */
proto.testapi.deprecation.FieldBehaviorComentsMessage.prototype.getRequiredInputOnlyField = function() {
  return /** @type{?proto.testapi.deprecation.FieldBehaviorComentsMessage.Post} */ (
    jspb.Message.getWrapperField(this, proto.testapi.deprecation.FieldBehaviorComentsMessage.Post, 5));
};


/**
 * @param {?proto.testapi.deprecation.FieldBehaviorComentsMessage.Post|undefined} value
 * @return {!proto.testapi.deprecation.FieldBehaviorComentsMessage} returns this
*/
proto.testapi.deprecation.FieldBehaviorComentsMessage.prototype.setRequiredInputOnlyField = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.testapi.deprecation.FieldBehaviorComentsMessage} returns this
 */
proto.testapi.deprecation.FieldBehaviorComentsMessage.prototype.clearRequiredInputOnlyField = function() {
  return this.setRequiredInputOnlyField(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.testapi.deprecation.FieldBehaviorComentsMessage.prototype.hasRequiredInputOnlyField = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional Post input_only_required_field = 6;
 * @return {?proto.testapi.deprecation.FieldBehaviorComentsMessage.Post}
 */
proto.testapi.deprecation.FieldBehaviorComentsMessage.prototype.getInputOnlyRequiredField = function() {
  return /** @type{?proto.testapi.deprecation.FieldBehaviorComentsMessage.Post} */ (
    jspb.Message.getWrapperField(this, proto.testapi.deprecation.FieldBehaviorComentsMessage.Post, 6));
};


/**
 * @param {?proto.testapi.deprecation.FieldBehaviorComentsMessage.Post|undefined} value
 * @return {!proto.testapi.deprecation.FieldBehaviorComentsMessage} returns this
*/
proto.testapi.deprecation.FieldBehaviorComentsMessage.prototype.setInputOnlyRequiredField = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.testapi.deprecation.FieldBehaviorComentsMessage} returns this
 */
proto.testapi.deprecation.FieldBehaviorComentsMessage.prototype.clearInputOnlyRequiredField = function() {
  return this.setInputOnlyRequiredField(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.testapi.deprecation.FieldBehaviorComentsMessage.prototype.hasInputOnlyRequiredField = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional Post input_only_field = 7;
 * @return {?proto.testapi.deprecation.FieldBehaviorComentsMessage.Post}
 */
proto.testapi.deprecation.FieldBehaviorComentsMessage.prototype.getInputOnlyField = function() {
  return /** @type{?proto.testapi.deprecation.FieldBehaviorComentsMessage.Post} */ (
    jspb.Message.getWrapperField(this, proto.testapi.deprecation.FieldBehaviorComentsMessage.Post, 7));
};


/**
 * @param {?proto.testapi.deprecation.FieldBehaviorComentsMessage.Post|undefined} value
 * @return {!proto.testapi.deprecation.FieldBehaviorComentsMessage} returns this
*/
proto.testapi.deprecation.FieldBehaviorComentsMessage.prototype.setInputOnlyField = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.testapi.deprecation.FieldBehaviorComentsMessage} returns this
 */
proto.testapi.deprecation.FieldBehaviorComentsMessage.prototype.clearInputOnlyField = function() {
  return this.setInputOnlyField(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.testapi.deprecation.FieldBehaviorComentsMessage.prototype.hasInputOnlyField = function() {
  return jspb.Message.getField(this, 7) != null;
};


goog.object.extend(exports, proto.testapi.deprecation);

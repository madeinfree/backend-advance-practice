/**
 * @flow
 * @relayHash f229f67c37e2a69d540ab562f5024fce
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type DeleteTodoMutationVariables = {|
  objectId?: ?string;
|};

export type DeleteTodoMutationResponse = {|
  +deleteTodo: ?{|
    +objectId: ?string;
  |};
|};
*/


/*
mutation DeleteTodoMutation(
  $objectId: String
) {
  deleteTodo(objectId: $objectId) {
    objectId
  }
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "objectId",
        "type": "String",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "DeleteTodoMutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "objectId",
            "variableName": "objectId",
            "type": "String"
          }
        ],
        "concreteType": "DeleteTodoType",
        "name": "deleteTodo",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "objectId",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "mutationRoot"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "DeleteTodoMutation",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "objectId",
        "type": "String",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "DeleteTodoMutation",
    "operation": "mutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "objectId",
            "variableName": "objectId",
            "type": "String"
          }
        ],
        "concreteType": "DeleteTodoType",
        "name": "deleteTodo",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "objectId",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "mutation DeleteTodoMutation(\n  $objectId: String\n) {\n  deleteTodo(objectId: $objectId) {\n    objectId\n  }\n}\n"
};

module.exports = batch;

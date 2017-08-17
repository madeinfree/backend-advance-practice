/**
 * @flow
 * @relayHash ac616e497d9765b447fa1569f243c910
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type TodoQueryResponse = {|
  +todo: ?{|
    +objectId: ?string;
    +title: ?string;
    +content: ?string;
    +completed: ?boolean;
  |};
|};
*/


/*
query TodoQuery(
  $searchId: String
) {
  todo(objectId: $searchId) {
    objectId
    title
    content
    completed
  }
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "searchId",
        "type": "String",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "TodoQuery",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "objectId",
            "variableName": "searchId",
            "type": "String"
          }
        ],
        "concreteType": "TodoType",
        "name": "todo",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "objectId",
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "title",
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "content",
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "completed",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "queryRoot"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "TodoQuery",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "searchId",
        "type": "String",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "TodoQuery",
    "operation": "query",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "objectId",
            "variableName": "searchId",
            "type": "String"
          }
        ],
        "concreteType": "TodoType",
        "name": "todo",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "objectId",
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "title",
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "content",
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "completed",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "query TodoQuery(\n  $searchId: String\n) {\n  todo(objectId: $searchId) {\n    objectId\n    title\n    content\n    completed\n  }\n}\n"
};

module.exports = batch;

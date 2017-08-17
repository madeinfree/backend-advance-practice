/**
 * @flow
 * @relayHash 85bb93d6d93690110eeb840f4860ed54
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type DeleteTodoMutationVariables = {| |};

export type DeleteTodoMutationResponse = {|
  +deleteTodo: ?$ReadOnlyArray<?{|
    +objectId: ?string;
  |}>;
|};
*/


/*
mutation DeleteTodoMutation {
  deleteTodo {
    objectId
  }
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "DeleteTodoMutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "DeleteTodoType",
        "name": "deleteTodo",
        "plural": true,
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
    "argumentDefinitions": [],
    "kind": "Root",
    "name": "DeleteTodoMutation",
    "operation": "mutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "DeleteTodoType",
        "name": "deleteTodo",
        "plural": true,
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
  "text": "mutation DeleteTodoMutation {\n  deleteTodo {\n    objectId\n  }\n}\n"
};

module.exports = batch;

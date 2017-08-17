/**
 * @flow
 * @relayHash 7222b538b46da87820ec52a6f7accbec
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type indexQueryResponse = {|
  +todos: ?$ReadOnlyArray<?{|
    +objectId: ?string;
    +title: ?string;
    +content: ?string;
  |}>;
|};
*/

/*
query indexQuery {
  todos {
    objectId
    title
    content
  }
}
*/

const batch /*: ConcreteBatch*/ = {
  fragment: {
    argumentDefinitions: [],
    kind: 'Fragment',
    metadata: null,
    name: 'indexQuery',
    selections: [
      {
        kind: 'LinkedField',
        alias: null,
        args: null,
        concreteType: 'TodoType',
        name: 'todos',
        plural: true,
        selections: [
          {
            kind: 'ScalarField',
            alias: null,
            args: null,
            name: 'objectId',
            storageKey: null
          },
          {
            kind: 'ScalarField',
            alias: null,
            args: null,
            name: 'title',
            storageKey: null
          },
          {
            kind: 'ScalarField',
            alias: null,
            args: null,
            name: 'content',
            storageKey: null
          }
        ],
        storageKey: null
      }
    ],
    type: 'Root'
  },
  id: null,
  kind: 'Batch',
  metadata: {},
  name: 'indexQuery',
  query: {
    argumentDefinitions: [],
    kind: 'Root',
    name: 'indexQuery',
    operation: 'query',
    selections: [
      {
        kind: 'LinkedField',
        alias: null,
        args: null,
        concreteType: 'TodoType',
        name: 'todos',
        plural: true,
        selections: [
          {
            kind: 'ScalarField',
            alias: null,
            args: null,
            name: 'objectId',
            storageKey: null
          },
          {
            kind: 'ScalarField',
            alias: null,
            args: null,
            name: 'title',
            storageKey: null
          },
          {
            kind: 'ScalarField',
            alias: null,
            args: null,
            name: 'content',
            storageKey: null
          }
        ],
        storageKey: null
      }
    ]
  },
  text:
    'query indexQuery {\n  todos {\n    objectId\n    title\n    content\n  }\n}\n'
};

module.exports = batch;

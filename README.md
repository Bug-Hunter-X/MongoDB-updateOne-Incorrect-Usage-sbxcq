# MongoDB updateOne Incorrect Usage
This repository demonstrates an example of incorrect usage of the `updateOne` method in MongoDB. The bug is caused by providing only the update document without using the `$set` operator to specify the fields to be updated. This leads to the entire document being replaced.  The solution demonstrates the correct way to update specific fields using the `$set` operator.

## Bug
The provided code will completely replace the document with the new one, losing any other data. This is unexpected behavior in most scenarios.

## Solution
The solution utilizes the `$set` operator to update only the `age` field in the specified document, preserving other fields.

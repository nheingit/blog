import algoliasearch from 'algoliasearch';
const client = algoliasearch('GC617R2XGC', '3faa971a4155083509d1bb991df7d514');
const index = client.initIndex('Blog');

export function saveObjectInAlgolia(obj: Object) {
  if (!("objectID" in obj)) return null
  index.saveObject(obj)
}
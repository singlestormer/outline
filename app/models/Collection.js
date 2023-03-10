// @flow
import { pick, trim } from "lodash";
import { action, computed, observable } from "mobx";
import BaseModel from "models/BaseModel";
import Document from "models/Document";
import type { NavigationNode } from "types";
import { client } from "utils/ApiClient";

export default class Collection extends BaseModel {
  @observable isSaving: boolean;
  @observable isLoadingUsers: boolean;

  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  permission: "read" | "read_write" | void;
  sharing: boolean;
  index: string;
  documents: NavigationNode[];
  createdAt: string;
  updatedAt: string;
  deletedAt: ?string;
  sort: { field: string, direction: "asc" | "desc" };
  url: string;
  urlId: string;

  @computed
  get isEmpty(): boolean {
    return this.documents.length === 0;
  }

  @computed
  get documentIds(): string[] {
    const results = [];
    const travelDocuments = (documentList, path) =>
      documentList.forEach((document) => {
        results.push(document.id);
        travelDocuments(document.children);
      });

    travelDocuments(this.documents);
    return results;
  }

  @computed
  get hasDescription(): boolean {
    return !!trim(this.description, "\\").trim();
  }

  @action
  updateDocument(document: Document) {
    const travelDocuments = (documentList, path) =>
      documentList.forEach((d) => {
        if (d.id === document.id) {
          d.title = document.title;
          d.url = document.url;
        } else {
          travelDocuments(d.children);
        }
      });

    travelDocuments(this.documents);
  }

  @action
  updateIndex(index: string) {
    this.index = index;
  }

  getDocumentChildren(documentId: string): NavigationNode[] {
    let result = [];
    const traveler = (nodes) => {
      nodes.forEach((childNode) => {
        if (childNode.id === documentId) {
          result = childNode.children;
          return;
        }
        return traveler(childNode.children);
      });
    };

    if (this.documents) {
      traveler(this.documents);
    }

    return result;
  }

  pathToDocument(documentId: string) {
    let path;
    const traveler = (nodes, previousPath) => {
      nodes.forEach((childNode) => {
        const newPath = [...previousPath, childNode];
        if (childNode.id === documentId) {
          path = newPath;
          return;
        }
        return traveler(childNode.children, newPath);
      });
    };

    if (this.documents) {
      traveler(this.documents, []);
      if (path) return path;
    }

    return [];
  }

  toJS = () => {
    return pick(this, [
      "id",
      "name",
      "color",
      "description",
      "sharing",
      "icon",
      "permission",
      "sort",
      "index",
    ]);
  };

  export = () => {
    return client.get("/collections.export", { id: this.id });
  };
}

export enum POST_TYPES {
  NORMAL = "NORMAL",
  EVENT = "EVENT",
}

export class Post {

  private type: POST_TYPES

  constructor(
    private id: string,
    private photo: string,
    private description: string,
    type: string,
    private createdAt: string,
    private authorId: string
  ) {

    if (type.toUpperCase() === POST_TYPES.NORMAL) {
      this.type = POST_TYPES.NORMAL
    } else if (type.toUpperCase() === POST_TYPES.EVENT) {
      this.type = POST_TYPES.EVENT
    } else {
      throw new Error("Invalid type")
    }
  }
  public getId = () => this.id;
  public getPhoto = () => this.photo;
  public getDescription = () => this.description;
  public getType = () => this.type;
  public getCreatedAt = () => this.createdAt;
  public getAuthorId = () => this.authorId;
}

export function postType(type: POST_TYPES): string {
  if (type === "EVENT") {
    return "EVENT"
  }
  return "NORMAL"
}

export interface inputPost {
  photo: string,
  description: string,
  type: string,
  token: string
}

export interface getPost {
  id: string,
  token: string
}
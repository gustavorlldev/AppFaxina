import { Observable } from "rxjs";
import { Usuario } from "./usuario";
import { Injectable } from "@angular/core";
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from "@angular/fire/firestore";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class LoginService {
  private usersCollection: AngularFirestoreCollection<Usuario> = this.db.collection(
    "usuario"
  );

  constructor(private db: AngularFirestore) {}

  getAll(): Observable<Usuario[]> {
    return this.db
      .collection<Usuario>("usuario")
      .snapshotChanges()
      .pipe(
        map((actions) => {
          return actions.map((item) => {
            const data = item.payload.doc.data() as Usuario;
            const id = item.payload.doc.id;
            return { id, ...data };
          });
        })
      );
  }

  insert(users: Usuario) {
    return this.usersCollection.add({ ...users });
  }

  delete(key: string) {
    return this.usersCollection.doc(key).delete();
  }

  update(object: Usuario) {
    return this.usersCollection.doc(object.id);
  }

  updateTeste(key: string) {
    return this.usersCollection.doc(key);
  }

  auth(object: Usuario) {
    return this.usersCollection.ref
      .where("usuario", "==", object.user)
      .where("usuario", "==", object.senha);
  }
}

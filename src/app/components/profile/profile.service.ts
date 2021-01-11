import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserData } from './userData';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private usersCollection: AngularFirestoreCollection<UserData> = this.db.collection(
    "usuario"
  );

  constructor(private db: AngularFirestore) {}

  getAll(): Observable<UserData[]> {
    return this.db
      .collection<UserData>("usuario")
      .snapshotChanges()
      .pipe(
        map((actions) => {
          return actions.map((item) => {
            const data = item.payload.doc.data() as UserData;
            const id = item.payload.doc.id;
            return { id, ...data };
          });
        })
      );
  }

  insert(users: UserData) {
    return this.usersCollection.add({ ...users });
  }

  delete(key: string) {
    return this.usersCollection.doc(key).delete();
  }

  update(object: UserData) {
    return this.usersCollection.doc(object.id);
  }

  auth(object: UserData) {
    return this.usersCollection.ref
      .where("usuario", "==", object.nome)
      .where("usuario", "==", object.sobrenome)
      .where("usuario", "==", object.email)
      .where("usuario", "==", object.sexo)
      .where("usuario", "==", object.idade)
      .where("usuario", "==", object.cpf)
      .where("usuario", "==", object.whatsApp)
      .where("usuario", "==", object.fotoDoPerfil);
  }

}

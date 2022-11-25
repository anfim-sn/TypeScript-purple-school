class KVdatabase {
  private db: Map<string, string> = new Map()

  save(key: string, value: string) {
    this.db.set(key, value)
  }
}

class PersistentDB {
  savePersistent(data: Object) {
    console.log(data)
  }
}

class PersistentDBAdapter extends KVdatabase {
  constructor(public database: PersistentDB) {
    super()
  }

  override save(key: string, value: string) {
    this.database.savePersistent({key, value})
  }
}

const run = (base: KVdatabase) => {
  base.save('key', 'value')
}

run(new PersistentDBAdapter(new PersistentDB()))
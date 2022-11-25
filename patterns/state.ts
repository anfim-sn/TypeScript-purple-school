class DocumentItem {
  public text: string = ''
  private state: DocumentItemState | undefined

  constructor() {
    this.setState(new DraftDocumentItemState())
  }

  setState(state: DocumentItemState) {
    this.state = state
    this.state.setContext(this)
  }
  getState() {
    return this.state
  }

  publish() {}

  delete() {}
}

abstract class DocumentItemState {
  public name: string = ''
  public item: DocumentItem | undefined

  public setContext(item: DocumentItem) {
    this.item = item
  }

  public abstract publish(): void
  public abstract delete(): void
}

class DraftDocumentItemState extends DocumentItemState{
  constructor() {
    super()
    this.name = 'Draft'
  }

  public publish() {
    this.item?.setState(new PublishDocumentItemState())
  }
  public delete() {
    console.log('Document deleted')
  }
}

class PublishDocumentItemState extends DocumentItemState{
  constructor() {
    super()
    this.name = 'Publish'
  }

  public delete(): void {
      this.item?.setState(new DraftDocumentItemState())
  }

  publish() {
    console.log('Document already publish')
  }
}

const item = new DocumentItem()
item.text = 'my Post'
item.publish()
console.log(item.getState())
item.delete()
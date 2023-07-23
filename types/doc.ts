export type DocsSidebar = {
  title: string
  icon?: string
  router: string
  children?: DocsSidebar
}

export type DocsGuide = {
  title: string
  children: [] | Array<DocsSidebar>
}

export type RenderingDocs = {
  title: string
  icon?: string
  router: string
}

export type StateManagementDoc = {
  title: string
  router: string
}

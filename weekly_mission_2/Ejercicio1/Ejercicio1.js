const repo = {
 name: "LaunchX",
 author: "carlogilmar",
 language: "JavaScript",
 numberOfCommits: 100,
 stars: 199,
 forks: 299,
 issues_open: 10,
 issues_close: 10,
 getTotalIssues: function(){
   return this.issues_open + this.issues_close
 },
 getGeneralInfo: function(){
   return `This repository ${this.name} was created by ${this.author}`
 }
}

console.log("Nombre del repo:" + repo.name)
console.log("Issues totales: " + repo.getTotalIssues())
console.log(repo.getGeneralInfo())




const issue = {
 title: 'LaunchX',
 repositoryNameAssociated: 'Playbook',
 status: 'Activo',
 numberOfComments: 10,
 labels: 5,
 author: 'OHKanchi',
 dateCreated: '19-04-2022',
 lastUpdated: '19-04-2022',

 getTitleAndAuthor: function() {
   return `Título: ${this.title} \n creado por: ${this.author}.`
 },
 getGeneralInfo: function() {
   return `Repositorio: ${this.repositoryNameAssociated} \n Estatus: ${this.status} \n Comentarios: ${this.numberOfComments} \n Etiquetas: ${this.labels} \n Fecha de creación: ${this.dateCreated} \n Última actualización: ${this.lastUpdated}.`
 }
}

console.log(issue.getTitleAndAuthor())
console.log(issue.getGeneralInfo())



const pullRequest = {
  title: 'LaunchX',
  branchName: 'Guadalajara',
  dateCreated: '19-04-2022',
  status: 'Activo',
  repositoryNameAssociated: 'Playbook',

  getStatus: function() {
    return `Este elemento se encuentra en estatus: ${this.status}.`
  },
  getTitleAndAutor: function() {
    return `${this.title} fue creado por: ${issue.author}`
  }
}

console.log(pullRequest.getStatus())
console.log(pullRequest.getTitleAndAutor())
import projects from "./projects.json"

export function get(_, res) {
  res.writeHead(200, {
    'Content-Type': 'application/json',
  })


  res.end(JSON.stringify(projects))
}

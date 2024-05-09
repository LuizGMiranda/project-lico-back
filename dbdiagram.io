// Use DBML to define your database structure
// Docs: https://dbml.dbdiagram.io/docs

Table player {
  id integer [primary key]
  name varchar
  position varchar
  birthOf varchar
  nationality varchar
  height integer
  weight integer
  dominantFoot varchar
  // photo varchar
}

Table team {
  id integer [primary key]
  name varchar
  coach varchar
}

Table match {
  id integer [primary key]
  teamHome integer
  teamAway integer
  location varchar
  result varchar [note: 'win, loss, draw']
  date timestamp
}

Table lineup {
  id integer [primary key]
  match integer
  player integer
  team integer
  status varchar [note: 'starter, substitute, suspended, injured']
}

Ref: lineup.match < match.id
Ref: lineup.team < team.id
Ref: lineup.player < player.id

Ref: match.teamAway > team.id
Ref: match.teamHome <> team.id


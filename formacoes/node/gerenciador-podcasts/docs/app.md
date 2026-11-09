# Podcast Menager

### Descrição

Um app estilo netflix, aonde posso centralizazr diferentes episódios podcasts separados por categoria

### Domínio

Podcasts feitos em vídeos

### Features

- Listar os episódios podcasts em sessões de categorias
    - [corrida, esporte, mentalidade, humor]
- Filtrar episódios por nome de podcast


## Como

### Feature:

Listar os episódios podcasts em sessões de categorias

### Como vou implementar:

Vou retornar em uma api rest (json) o nome do podcast, nome do episódio, imagem de capa, link, categoria

```js
[
 {
    podcastName: "flow",
    episode: "O NOVO SIMULADOR DO FLOW",
    videoId: "zWoCSF9e2vM",
    cover: "https://i.ytimg.com/vi/zWoCSF9e2vM/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCYRUuz6k0vhqnRPx7Kb63E5XHMrw",
    link: "https://www.youtube.com/watch?v=zWoCSF9e2vM",
    categories: ["corrida", "esporte"]
 },
]
```
const fetchMembers = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        {
          id: 1457912,
          login: "brauliodiez",
          avatar_url: "https://avatars.githubusercontent.com/u/1457912?v=3"
        },
        {
          id: 4374977,
          login: "Nasdan",
          avatar_url: "https://avatars.githubusercontent.com/u/4374977?v=3"
        }
      ])
    }, 2000)
  })
}

export const memberAPI = {
  fetchMembers
}

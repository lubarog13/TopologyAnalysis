export const load = async ({ url }) => {
    console.log(url.searchParams.get('action'))
    return {
      ref: url.searchParams.get('action')
    }
  }
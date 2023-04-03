const setPaginationSlice = (page, perPage, arrLength) => {
    if (perPage && arrLength){
      page = parseInt(page);
      perPage = parseInt(perPage);

      if ( !isNaN(page) && page >=0 && !isNaN(perPage) && perPage >0 ){
        const start = ( page - 1 ) * perPage;
        if ( start >= arrLength ) return null;
        
        const end = start + perPage;
        return { start, end }
      }
    }
    return null;
  }

  module.exports = setPaginationSlice;


export const util  = { 
    /* Clona objeto */ 
    clone: (obj) => {
        if ( obj === null || typeof obj  !== 'object' ) {
            return obj;
        }
        var temp = obj.constructor();
        for ( var key in obj ) {
            temp[ key ] = util.clone( obj[ key ] );
        }
        return temp;
    },
    /* Verifica si es NO nulo */
    isNotNull: (v) => {
        return ! util.isNull(v);
    },
    
    /* Verifica si es  nulo */
    isNull: (v) => {
        if (v === undefined || v === null) {
            return true;
        }
        else {
            return false;
        }
    },
    
    isIntersectSet(A,B) {
    
       //if (Array.isArray(A)) { A=new Set(A); }
       //if (Array.isArray(B)) { B=new Set(B); }
       let setA=new Set(A);
       let setB=new Set(B);
       let _intersection = new Set()
       for (let elem of setB) {
         if (setA.has(elem)) {
           _intersection.add(elem)
         }
       }
       return (_intersection.size>0)?true:false;
   }, 
   
   strToNull: (v) => {
        if (util.isNull(v) || v=='')  {
          return null;
        }
        else  {
           return v;
        }
    },
       
};
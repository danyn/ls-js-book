const _ = {
  each: function(list, callback) {
    if (Array.isArray(list)){
      for(let i = 0; i < list.length; ++i) {
        callback(list[i], i, list);
      }
    } else {
      for (const key in list) {
        if (Object.hasOwnProperty.call(list, key)) {
          callback(list[key], key, list); 
        }
      }
    }
  }
}

_.each([1,2,3], function(elem, i , arr) { console.log(elem + 20, i, arr)});
_.each({cat: 'redmund', dog:'wiggles'}, function(elem, key, obj) { console.log("Mr. "  + elem, key, obj) });
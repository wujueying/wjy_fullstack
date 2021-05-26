function Archiver(){
    var value = null;
    var archive = [];
    Object.defineProperty(this, 'num', {
        get: function() {
            console.log('执行了get操作');
            return value;
        },
        set: function(newValue) { 
            console.log('执行了set操作'); 
            value = newValue; 
            archive.push({val: value}) 
        } 
    })  
    this.getArchive = function(){
        return archive
    }
}

var arc = new Archiver();   // 实例
arc.num   // get操作
arc.num = 11;
arc.num = 13;
console.log(arc.getArchive());
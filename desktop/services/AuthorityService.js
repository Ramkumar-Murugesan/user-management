var authority_dao = require("../daos/AuthorityDao");

module.exports.get_all_Authority = function(callback){
    authority_dao.get_all_Authority(function(authority){
        callback(authority)
    })
}

module.exports.save_Authority = function(data , callback){
    authority_dao.save_Authority(data,function(authority){
        callback(authority);
    })
}

module.exports.delete_Authority = function(data ,callback){
    authority_dao.deleteAuthority(data,function(authority){
        callback(authority);
    })
}

module.exports.getAuthority_by_user = function(data , callback){
    authority_dao.getAuthority_by_user(data , function(authority){
        callback(authority);
    })
}
function StatusCheck(){


    StatusCheck.prototype.getStatus = function() {

        var status = {

          position : [1,2],
          facing : "N"

        };

        return JSON.stringify(status);
    };

}

module.exports = StatusCheck;
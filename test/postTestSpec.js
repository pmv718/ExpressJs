const should = require("chai").should(),
assert = require ("chai").assert,
supertest = require("supertest"),
app = require("../server");

var url = supertest("http://localhost:8080");

// describe.only("Testing calculator POST route", function(err){
//  it("should handle and send the computed info", function(done){
//    url
//        .post("/calculate/add")
//        .send({ num1: "40", num2: "15" })
//        .expect(200)
//        .end(function(err,res){
//          should.not.exist(err);
//          parseInt(res.text).should.equal(55,"Expected value not matching with response");
//          done();
//        });
//
//  });
// });
describe.only("Testing Null data POST route", function(err){
 it("should handle null info", function(done){
   url
       .delete("/delete")
       .send('')
       .expect(200)
       .end(function(err,res){
         should.not.exist(err);
         (res.text).should.equal("Data is invalid");
         done();
       });

 });
});

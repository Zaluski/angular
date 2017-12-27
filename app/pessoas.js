angular
    .module('Pessoas',[])

    .config(function ($routeProvider) {
        $routeProvider
        .when('/',{
            templateUrl: 'listar.html'
        })
            .when("/pessoa/adicionar", {
                templateUrl: 'adicionar.html',
                controller: "CtrlAdicionar"
            });
    })

    .controller("CtrlPessoas", function ($scope) {

        $scope.pessoas = [

            {nome: "Rafael",cidade: "Porto Alegre"},
            {nome: "Tais",cidade: "Canoas"},
            {nome: "Roberto",cidade: "Gravataí"},
            {nome: "Susana",cidade: "Porto Alegre"}
        ];

    })

   .controller("CtrlAdicionar", function ($scope) {

       $scope.add = function () {

           $scope.pessoas.push({
              nome: $scope.pessoa.nome,
               cidade: $scope.pessoa.cidade
           });

           $scope.pessoa.nome = "sssssss";
           $scope.pessoa.cidade = "";


       };

   });
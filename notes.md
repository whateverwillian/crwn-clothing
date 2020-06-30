# Notes

Application flow

Actions => Reducers => Store => Reflects on React

1) Primeiro adicionamos um type, que representa o tipo da action. 
Usado também pelo reducer para identificar a action.

Essa prática de isolar as constantes dentro de um arquivo visa
evitar bugs, pois é mais fácil identificar uma variável escrita errada do 
que uma string

2) Depois, vamos criar a action, que em casos síncronos, é uma fn que retorna um objeto.
Por padrão, o objeto contém o type (tipo da ação), e opcionalmente, um payload (data, pode ser qualquer coisa).
Por fim, usamos dispatch(objeto_resultante_da_action) para despachar a ação.

3) Quem recebe a ação e atua no state é um dos nossos reducers, que baseado no "type", atua em cima do state anterior, e gera um novo state

4) Para acessar o state, usamos o connect(Component) junto ao export default, e o connect recebe dois parâmetros,
o segundo sendo opcional:

A) mapStateToProps, que "mapeia" o que queremos do estado para as props do componente
B) mapDispatchToProps, que "mapeia" as ações como métodos para os props

obs: ambas funções que retornam um objeto
obs2: podemos usar mapStateToProps como null, ou não usar mapDispatchToPros. Tudo depende do que o component precisa.

5) Agora podemos pegar tudo informado no item 4) pelas props do Component, e usar.
Porém ainda podemos melhorar a performance com algo chamado "memoizing".

Quando nós atualizamos uma pequena parte de um state global X, todo o resto é renderizado de novo
Porque a action passa pelo rootReducer que tem todos os reducers da aplicação, e neles, nós retornamos
um state igual ao state anterior, porém, é um novo objeto

Para evitar re-renderizar componentes que não foram atualizados, instalamos a biblioteca "reselect", e com isso,
entramos no conceito de **selectors**

6) Selectors ou seletores servem para pegar um pedaço do state que nos interessa, e como eles estão relacionados
com pegar informações do state, vamos utilizar esses seletores no nosso mapStateToProps, e vamos criar um arquivo específico para os seletores


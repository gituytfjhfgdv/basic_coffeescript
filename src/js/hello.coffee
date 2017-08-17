class Hello
  constructor: (@name) ->
  say: ->
   alert "plz say hello #{@name}."
Tom = new Hello "CoffeeScript"
Tom.say() #実行
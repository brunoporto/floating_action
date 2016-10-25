Floating Action
=======

[![Code Climate](https://codeclimate.com/github/brunoporto/floating_action/badges/gpa.svg)](https://codeclimate.com/github/brunoporto/floating_action)

Essa GEM fornece acesso ao plugin jQuery para colocar ações como barra flutuante anexa a um container

# Requisitos

- jQuery 1.2+

# Instalação

Adicione essa linha no Gemfile do projeto:
```ruby
gem 'floating_action'
```

Adicione a seguinte linha no seu arquivo `application.css`:
```css
*= require floating_action/floating_action
```

Adicione a seguinte linha no seu arquivo `application.js`:
```js
//= require floating_action/floating_action
```

Para inicializar o plugin você utilizará o código abaixo:
```js
var floating_action = new FloatingAction({
    containerClass: 'floating-container-style',
    contentClass: 'floating-content-style',
    direction: 'center'
}).init();
```

Seus eventos são baseados em [delegator](https://learn.jquery.com/events/event-delegation/) do jQuery e estão vinculados ao **document**.

# Utilização

Para transformar um grupo de ação em barra flutuante você deve adicionar a classe `.float-actions-container` a um elemento e a classe `.float-actions-content` a um elemento filho.
Exemplo:
```haml
%table.table
    %tr.floating-action-container
        %td José da Silva
        %td Empresa XYZ
        %td.floating-action-content
            %a{:href => '#'} Editar
            %a{:href => '#'} Remover
```

## Comportamento 

A barra só aparecerá em resolução acima de 992px onde o dispositivo é considerado DESKTOP, abaixo dessa resolução não haverá modificações no elemento e a barra não aparecerá, mantendo o elemento original com a classe `float-actions-content` visível.
$:.push File.expand_path("../lib", __FILE__)

# Maintain your gem's version:
require "floating_action/version"

# Describe your gem and declare its dependencies:
Gem::Specification.new do |s|
  s.name        = "floating_action"
  s.version     = FloatingAction::VERSION
  s.authors     = ["Bruno Porto"]
  s.email       = ["brunotporto@gmail.com"]
  s.homepage    = "https://github.com/brunoporto/floating_action"
  s.summary     = "Possibilita aplicar ações como barra flutuante anexa a um container"
  s.description = "Possibilita aplicar ações como barra flutuante anexa a um container"
  s.license     = "MIT"

  s.files = Dir["{app,config,db,lib}/**/*", "MIT-LICENSE", "Rakefile", "README.md"]
  s.test_files = Dir["test/**/*"]

  # s.add_dependency "rails", "~> 4.2.7"
  # s.add_development_dependency "sqlite3"
end

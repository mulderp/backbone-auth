# This file should contain all the record creation needed to seed the database with its default values.

u = User.new
u.username = "patrick"
u.email = "mulder.patrick@gmail.com"
u.save
p = Project.new
p.title = "Auth project"
p.description = "API auth stuff"
p.user = u
p.save

u = User.new
u.username = "fazle"
u.save

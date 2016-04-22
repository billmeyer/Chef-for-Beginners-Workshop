# Chef for Beginners Workshop

This is a repo for developing the Chef for Beginners Workshop.

## Abstract

Chef for Beginners is a comprehensive instructor-led workshop covering the basic architecture of Chef, 
the use of Chef Development Kit (ChefDK), and associated tools. Development, engineering, and operations 
staff will learn to use Chef to automate the configuration, deployment, and management of server 
infrastructure.

Participants will also learn how to test their configurations. Each of the core units in this course 
has hands-on exercises to reinforce the material. At the end of the course, students will have a code 
repository that can be used and modified to solve real business problems.

## History

The Chef for Beginners workshop contains the first five modules from the [Chef Essentials](https://github.com/chef-training/chef-essentials).
training course and is intended to be instructor-led over a three hour span as opposed to three days like Chef Essentials.

## Learner Requirements

Attendees need a network-enabled laptop with a terminal that supports SSH.

* Windows 7+ through [Putty](http://www.putty.org/) or [Cygwin with OpenSSH](https://www.cygwin.com/).

* Mac OS X 10.11

* Ubuntu 14.04


It’s best that learners have some familiarity and comfort with the following:

* Writing code (of just about any flavor) in a text editor
* Working on the command line
* Basic system administration – installing packages, configuring those packages, starting services

## Agenda

1. Introduction
2. Resources
3. Cookbooks
4. chef-client
5. Testing Cookbooks

## Workstation Setup

The first series of modules focus on getting learners engaged with the content as quickly as possible. A workstation is 
provided to the learners.

### Amazon Machine Instance

This workstation is currently being managed as a Amazon Machine Instance (AMI). This AMI is managed by Chef through the 
Training AWS Account.

* Essentials - CentOS 6.7 - 5.0.0 (ami-752b191f)

> The AMI was generated with [Packer](https://github.com/chef-training/chefdk-fundamentals-image) and adheres to the 
following [policy](https://github.com/chef-training/chefdk-image/blob/master/cookbooks/workstations/recipes/essentials.rb). 
It is based on a Marketplace AMI so it cannot be made public. If you would like access to this AMI to deliver training 
please contact [training@chef.io](mailto:training@chef.io) the request that includes your Amazon Account Id.

### Creating the Workstation

> An chef recipe that automates the creation of the workstation can be found in the [ChefDK Image](
https://github.com/chef-training/chefdk-image/blob/master/cookbooks/workstations/recipes/essentials.rb
) project

* Installation of ChefDK

* Create a user named 'chef' with the password 'chef'

* Ensure the yum package repository is up-to-date

```
$ yum update -y
```

* Install editors: vim; emacs; nano.

* Uninstall other tools that they will install: cowsay; tree; and git.

* Install [Docker on CentOS](https://docs.docker.com/engine/installation/centos/)

* Allow Password Authentication

* Disable the iptables service

* Disable SELINUX

* Added an ec2 json hints file (content: `{}`) to `/etc/chef/ohai/hints/ec2.json`
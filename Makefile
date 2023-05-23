.PHONY: keys build run clean

keys:
	ssh-keygen -t rsa -b 4096 -C "your_email@example.com" -f ./id_rsa -N ''

build:
	docker-compose -f docker-compose.dev.yaml build

run:
	docker-compose -f docker-compose.dev.yaml up -d

#clean:
#	rm ./id_rsa ./id_rsa.pub

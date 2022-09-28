import socket

server_socket = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
server_socket.bind(("", 12000))

while True:

    message, address = server_socket.recvfrom(1024)
    command = {
        b"11": "forward",
        b"00": "stop",
        b"10": "right",
        b"01": "left",
    }
    print(f"{command[message]}")
    server_socket.sendto(message, address)

let users = {}

export const listUsers = () => {
    return users
}

export const createUser = (name,sname,email,password) => {
    users.name=name
    users.sname=sname
    users.email=email
    users.password=password
    return users
}
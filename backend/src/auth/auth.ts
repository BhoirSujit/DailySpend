import { sign, verify } from "jsonwebtoken";
import { jwt_secreate } from "../config/config";

interface payloadType  {
    name: string,
    email: string
}

export async function generate(payload: payloadType) {
    return sign(payload, jwt_secreate!);
}

export async function compare(token: string) {
    return verify(token, jwt_secreate!)
}
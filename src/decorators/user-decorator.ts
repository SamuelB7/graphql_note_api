import { createParamDecorator, ExecutionContext } from "@nestjs/common";


export const User = createParamDecorator((_, context: ExecutionContext) => {
    const arg = context?.getArgs()
    const type = context?.getType()
    const user = type === 'http' ? arg?.[0]?.user : arg?.[2]?.req?.user
    return user
})
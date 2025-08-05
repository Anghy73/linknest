
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Link
 * 
 */
export type Link = $Result.DefaultSelection<Prisma.$LinkPayload>
/**
 * Model Tag
 * 
 */
export type Tag = $Result.DefaultSelection<Prisma.$TagPayload>
/**
 * Model LinkTag
 * 
 */
export type LinkTag = $Result.DefaultSelection<Prisma.$LinkTagPayload>
/**
 * Model ShortLink
 * 
 */
export type ShortLink = $Result.DefaultSelection<Prisma.$ShortLinkPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  USER: 'USER',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.link`: Exposes CRUD operations for the **Link** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Links
    * const links = await prisma.link.findMany()
    * ```
    */
  get link(): Prisma.LinkDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tag`: Exposes CRUD operations for the **Tag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tags
    * const tags = await prisma.tag.findMany()
    * ```
    */
  get tag(): Prisma.TagDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.linkTag`: Exposes CRUD operations for the **LinkTag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LinkTags
    * const linkTags = await prisma.linkTag.findMany()
    * ```
    */
  get linkTag(): Prisma.LinkTagDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.shortLink`: Exposes CRUD operations for the **ShortLink** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ShortLinks
    * const shortLinks = await prisma.shortLink.findMany()
    * ```
    */
  get shortLink(): Prisma.ShortLinkDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.12.0
   * Query Engine version: 8047c96bbd92db98a2abc7c9323ce77c02c89dbc
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Link: 'Link',
    Tag: 'Tag',
    LinkTag: 'LinkTag',
    ShortLink: 'ShortLink'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "link" | "tag" | "linkTag" | "shortLink"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Link: {
        payload: Prisma.$LinkPayload<ExtArgs>
        fields: Prisma.LinkFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LinkFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LinkFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkPayload>
          }
          findFirst: {
            args: Prisma.LinkFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LinkFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkPayload>
          }
          findMany: {
            args: Prisma.LinkFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkPayload>[]
          }
          create: {
            args: Prisma.LinkCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkPayload>
          }
          createMany: {
            args: Prisma.LinkCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LinkCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkPayload>[]
          }
          delete: {
            args: Prisma.LinkDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkPayload>
          }
          update: {
            args: Prisma.LinkUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkPayload>
          }
          deleteMany: {
            args: Prisma.LinkDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LinkUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LinkUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkPayload>[]
          }
          upsert: {
            args: Prisma.LinkUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkPayload>
          }
          aggregate: {
            args: Prisma.LinkAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLink>
          }
          groupBy: {
            args: Prisma.LinkGroupByArgs<ExtArgs>
            result: $Utils.Optional<LinkGroupByOutputType>[]
          }
          count: {
            args: Prisma.LinkCountArgs<ExtArgs>
            result: $Utils.Optional<LinkCountAggregateOutputType> | number
          }
        }
      }
      Tag: {
        payload: Prisma.$TagPayload<ExtArgs>
        fields: Prisma.TagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          findFirst: {
            args: Prisma.TagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          findMany: {
            args: Prisma.TagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          create: {
            args: Prisma.TagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          createMany: {
            args: Prisma.TagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TagCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          delete: {
            args: Prisma.TagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          update: {
            args: Prisma.TagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          deleteMany: {
            args: Prisma.TagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TagUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          upsert: {
            args: Prisma.TagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          aggregate: {
            args: Prisma.TagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTag>
          }
          groupBy: {
            args: Prisma.TagGroupByArgs<ExtArgs>
            result: $Utils.Optional<TagGroupByOutputType>[]
          }
          count: {
            args: Prisma.TagCountArgs<ExtArgs>
            result: $Utils.Optional<TagCountAggregateOutputType> | number
          }
        }
      }
      LinkTag: {
        payload: Prisma.$LinkTagPayload<ExtArgs>
        fields: Prisma.LinkTagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LinkTagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkTagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LinkTagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkTagPayload>
          }
          findFirst: {
            args: Prisma.LinkTagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkTagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LinkTagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkTagPayload>
          }
          findMany: {
            args: Prisma.LinkTagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkTagPayload>[]
          }
          create: {
            args: Prisma.LinkTagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkTagPayload>
          }
          createMany: {
            args: Prisma.LinkTagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LinkTagCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkTagPayload>[]
          }
          delete: {
            args: Prisma.LinkTagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkTagPayload>
          }
          update: {
            args: Prisma.LinkTagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkTagPayload>
          }
          deleteMany: {
            args: Prisma.LinkTagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LinkTagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LinkTagUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkTagPayload>[]
          }
          upsert: {
            args: Prisma.LinkTagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkTagPayload>
          }
          aggregate: {
            args: Prisma.LinkTagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLinkTag>
          }
          groupBy: {
            args: Prisma.LinkTagGroupByArgs<ExtArgs>
            result: $Utils.Optional<LinkTagGroupByOutputType>[]
          }
          count: {
            args: Prisma.LinkTagCountArgs<ExtArgs>
            result: $Utils.Optional<LinkTagCountAggregateOutputType> | number
          }
        }
      }
      ShortLink: {
        payload: Prisma.$ShortLinkPayload<ExtArgs>
        fields: Prisma.ShortLinkFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ShortLinkFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShortLinkPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ShortLinkFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShortLinkPayload>
          }
          findFirst: {
            args: Prisma.ShortLinkFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShortLinkPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ShortLinkFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShortLinkPayload>
          }
          findMany: {
            args: Prisma.ShortLinkFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShortLinkPayload>[]
          }
          create: {
            args: Prisma.ShortLinkCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShortLinkPayload>
          }
          createMany: {
            args: Prisma.ShortLinkCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ShortLinkCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShortLinkPayload>[]
          }
          delete: {
            args: Prisma.ShortLinkDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShortLinkPayload>
          }
          update: {
            args: Prisma.ShortLinkUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShortLinkPayload>
          }
          deleteMany: {
            args: Prisma.ShortLinkDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ShortLinkUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ShortLinkUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShortLinkPayload>[]
          }
          upsert: {
            args: Prisma.ShortLinkUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShortLinkPayload>
          }
          aggregate: {
            args: Prisma.ShortLinkAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateShortLink>
          }
          groupBy: {
            args: Prisma.ShortLinkGroupByArgs<ExtArgs>
            result: $Utils.Optional<ShortLinkGroupByOutputType>[]
          }
          count: {
            args: Prisma.ShortLinkCountArgs<ExtArgs>
            result: $Utils.Optional<ShortLinkCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    link?: LinkOmit
    tag?: TagOmit
    linkTag?: LinkTagOmit
    shortLink?: ShortLinkOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    links: number
    tags: number
    linkTags: number
    shortLinks: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    links?: boolean | UserCountOutputTypeCountLinksArgs
    tags?: boolean | UserCountOutputTypeCountTagsArgs
    linkTags?: boolean | UserCountOutputTypeCountLinkTagsArgs
    shortLinks?: boolean | UserCountOutputTypeCountShortLinksArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLinksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LinkWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TagWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLinkTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LinkTagWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountShortLinksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShortLinkWhereInput
  }


  /**
   * Count Type LinkCountOutputType
   */

  export type LinkCountOutputType = {
    linkTags: number
  }

  export type LinkCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    linkTags?: boolean | LinkCountOutputTypeCountLinkTagsArgs
  }

  // Custom InputTypes
  /**
   * LinkCountOutputType without action
   */
  export type LinkCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkCountOutputType
     */
    select?: LinkCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LinkCountOutputType without action
   */
  export type LinkCountOutputTypeCountLinkTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LinkTagWhereInput
  }


  /**
   * Count Type TagCountOutputType
   */

  export type TagCountOutputType = {
    links: number
  }

  export type TagCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    links?: boolean | TagCountOutputTypeCountLinksArgs
  }

  // Custom InputTypes
  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TagCountOutputType
     */
    select?: TagCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeCountLinksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LinkTagWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    username: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    username: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    email: number
    password: number
    role: number
    createdAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    username: string
    email: string
    password: string
    role: $Enums.Role
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    links?: boolean | User$linksArgs<ExtArgs>
    tags?: boolean | User$tagsArgs<ExtArgs>
    linkTags?: boolean | User$linkTagsArgs<ExtArgs>
    shortLinks?: boolean | User$shortLinksArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "email" | "password" | "role" | "createdAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    links?: boolean | User$linksArgs<ExtArgs>
    tags?: boolean | User$tagsArgs<ExtArgs>
    linkTags?: boolean | User$linkTagsArgs<ExtArgs>
    shortLinks?: boolean | User$shortLinksArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      links: Prisma.$LinkPayload<ExtArgs>[]
      tags: Prisma.$TagPayload<ExtArgs>[]
      linkTags: Prisma.$LinkTagPayload<ExtArgs>[]
      shortLinks: Prisma.$ShortLinkPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string
      email: string
      password: string
      role: $Enums.Role
      createdAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    links<T extends User$linksArgs<ExtArgs> = {}>(args?: Subset<T, User$linksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LinkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tags<T extends User$tagsArgs<ExtArgs> = {}>(args?: Subset<T, User$tagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    linkTags<T extends User$linkTagsArgs<ExtArgs> = {}>(args?: Subset<T, User$linkTagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LinkTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    shortLinks<T extends User$shortLinksArgs<ExtArgs> = {}>(args?: Subset<T, User$shortLinksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShortLinkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly username: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.links
   */
  export type User$linksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Link
     */
    select?: LinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Link
     */
    omit?: LinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkInclude<ExtArgs> | null
    where?: LinkWhereInput
    orderBy?: LinkOrderByWithRelationInput | LinkOrderByWithRelationInput[]
    cursor?: LinkWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LinkScalarFieldEnum | LinkScalarFieldEnum[]
  }

  /**
   * User.tags
   */
  export type User$tagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    where?: TagWhereInput
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    cursor?: TagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * User.linkTags
   */
  export type User$linkTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkTag
     */
    select?: LinkTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LinkTag
     */
    omit?: LinkTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkTagInclude<ExtArgs> | null
    where?: LinkTagWhereInput
    orderBy?: LinkTagOrderByWithRelationInput | LinkTagOrderByWithRelationInput[]
    cursor?: LinkTagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LinkTagScalarFieldEnum | LinkTagScalarFieldEnum[]
  }

  /**
   * User.shortLinks
   */
  export type User$shortLinksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShortLink
     */
    select?: ShortLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShortLink
     */
    omit?: ShortLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShortLinkInclude<ExtArgs> | null
    where?: ShortLinkWhereInput
    orderBy?: ShortLinkOrderByWithRelationInput | ShortLinkOrderByWithRelationInput[]
    cursor?: ShortLinkWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ShortLinkScalarFieldEnum | ShortLinkScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Link
   */

  export type AggregateLink = {
    _count: LinkCountAggregateOutputType | null
    _avg: LinkAvgAggregateOutputType | null
    _sum: LinkSumAggregateOutputType | null
    _min: LinkMinAggregateOutputType | null
    _max: LinkMaxAggregateOutputType | null
  }

  export type LinkAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type LinkSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type LinkMinAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    logo: string | null
    img: string | null
    url: string | null
    shortUrl: string | null
    comment: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: number | null
    guestId: string | null
  }

  export type LinkMaxAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    logo: string | null
    img: string | null
    url: string | null
    shortUrl: string | null
    comment: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: number | null
    guestId: string | null
  }

  export type LinkCountAggregateOutputType = {
    id: number
    title: number
    description: number
    logo: number
    img: number
    url: number
    shortUrl: number
    comment: number
    createdAt: number
    updatedAt: number
    userId: number
    guestId: number
    _all: number
  }


  export type LinkAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type LinkSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type LinkMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    logo?: true
    img?: true
    url?: true
    shortUrl?: true
    comment?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    guestId?: true
  }

  export type LinkMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    logo?: true
    img?: true
    url?: true
    shortUrl?: true
    comment?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    guestId?: true
  }

  export type LinkCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    logo?: true
    img?: true
    url?: true
    shortUrl?: true
    comment?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    guestId?: true
    _all?: true
  }

  export type LinkAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Link to aggregate.
     */
    where?: LinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Links to fetch.
     */
    orderBy?: LinkOrderByWithRelationInput | LinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Links from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Links.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Links
    **/
    _count?: true | LinkCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LinkAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LinkSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LinkMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LinkMaxAggregateInputType
  }

  export type GetLinkAggregateType<T extends LinkAggregateArgs> = {
        [P in keyof T & keyof AggregateLink]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLink[P]>
      : GetScalarType<T[P], AggregateLink[P]>
  }




  export type LinkGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LinkWhereInput
    orderBy?: LinkOrderByWithAggregationInput | LinkOrderByWithAggregationInput[]
    by: LinkScalarFieldEnum[] | LinkScalarFieldEnum
    having?: LinkScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LinkCountAggregateInputType | true
    _avg?: LinkAvgAggregateInputType
    _sum?: LinkSumAggregateInputType
    _min?: LinkMinAggregateInputType
    _max?: LinkMaxAggregateInputType
  }

  export type LinkGroupByOutputType = {
    id: number
    title: string
    description: string
    logo: string
    img: string
    url: string
    shortUrl: string
    comment: string
    createdAt: Date
    updatedAt: Date
    userId: number | null
    guestId: string
    _count: LinkCountAggregateOutputType | null
    _avg: LinkAvgAggregateOutputType | null
    _sum: LinkSumAggregateOutputType | null
    _min: LinkMinAggregateOutputType | null
    _max: LinkMaxAggregateOutputType | null
  }

  type GetLinkGroupByPayload<T extends LinkGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LinkGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LinkGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LinkGroupByOutputType[P]>
            : GetScalarType<T[P], LinkGroupByOutputType[P]>
        }
      >
    >


  export type LinkSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    logo?: boolean
    img?: boolean
    url?: boolean
    shortUrl?: boolean
    comment?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    guestId?: boolean
    user?: boolean | Link$userArgs<ExtArgs>
    linkTags?: boolean | Link$linkTagsArgs<ExtArgs>
    _count?: boolean | LinkCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["link"]>

  export type LinkSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    logo?: boolean
    img?: boolean
    url?: boolean
    shortUrl?: boolean
    comment?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    guestId?: boolean
    user?: boolean | Link$userArgs<ExtArgs>
  }, ExtArgs["result"]["link"]>

  export type LinkSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    logo?: boolean
    img?: boolean
    url?: boolean
    shortUrl?: boolean
    comment?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    guestId?: boolean
    user?: boolean | Link$userArgs<ExtArgs>
  }, ExtArgs["result"]["link"]>

  export type LinkSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    logo?: boolean
    img?: boolean
    url?: boolean
    shortUrl?: boolean
    comment?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    guestId?: boolean
  }

  export type LinkOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "logo" | "img" | "url" | "shortUrl" | "comment" | "createdAt" | "updatedAt" | "userId" | "guestId", ExtArgs["result"]["link"]>
  export type LinkInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Link$userArgs<ExtArgs>
    linkTags?: boolean | Link$linkTagsArgs<ExtArgs>
    _count?: boolean | LinkCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LinkIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Link$userArgs<ExtArgs>
  }
  export type LinkIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Link$userArgs<ExtArgs>
  }

  export type $LinkPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Link"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
      linkTags: Prisma.$LinkTagPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      description: string
      logo: string
      img: string
      url: string
      shortUrl: string
      comment: string
      createdAt: Date
      updatedAt: Date
      userId: number | null
      guestId: string
    }, ExtArgs["result"]["link"]>
    composites: {}
  }

  type LinkGetPayload<S extends boolean | null | undefined | LinkDefaultArgs> = $Result.GetResult<Prisma.$LinkPayload, S>

  type LinkCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LinkFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LinkCountAggregateInputType | true
    }

  export interface LinkDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Link'], meta: { name: 'Link' } }
    /**
     * Find zero or one Link that matches the filter.
     * @param {LinkFindUniqueArgs} args - Arguments to find a Link
     * @example
     * // Get one Link
     * const link = await prisma.link.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LinkFindUniqueArgs>(args: SelectSubset<T, LinkFindUniqueArgs<ExtArgs>>): Prisma__LinkClient<$Result.GetResult<Prisma.$LinkPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Link that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LinkFindUniqueOrThrowArgs} args - Arguments to find a Link
     * @example
     * // Get one Link
     * const link = await prisma.link.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LinkFindUniqueOrThrowArgs>(args: SelectSubset<T, LinkFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LinkClient<$Result.GetResult<Prisma.$LinkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Link that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkFindFirstArgs} args - Arguments to find a Link
     * @example
     * // Get one Link
     * const link = await prisma.link.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LinkFindFirstArgs>(args?: SelectSubset<T, LinkFindFirstArgs<ExtArgs>>): Prisma__LinkClient<$Result.GetResult<Prisma.$LinkPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Link that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkFindFirstOrThrowArgs} args - Arguments to find a Link
     * @example
     * // Get one Link
     * const link = await prisma.link.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LinkFindFirstOrThrowArgs>(args?: SelectSubset<T, LinkFindFirstOrThrowArgs<ExtArgs>>): Prisma__LinkClient<$Result.GetResult<Prisma.$LinkPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Links that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Links
     * const links = await prisma.link.findMany()
     * 
     * // Get first 10 Links
     * const links = await prisma.link.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const linkWithIdOnly = await prisma.link.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LinkFindManyArgs>(args?: SelectSubset<T, LinkFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LinkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Link.
     * @param {LinkCreateArgs} args - Arguments to create a Link.
     * @example
     * // Create one Link
     * const Link = await prisma.link.create({
     *   data: {
     *     // ... data to create a Link
     *   }
     * })
     * 
     */
    create<T extends LinkCreateArgs>(args: SelectSubset<T, LinkCreateArgs<ExtArgs>>): Prisma__LinkClient<$Result.GetResult<Prisma.$LinkPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Links.
     * @param {LinkCreateManyArgs} args - Arguments to create many Links.
     * @example
     * // Create many Links
     * const link = await prisma.link.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LinkCreateManyArgs>(args?: SelectSubset<T, LinkCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Links and returns the data saved in the database.
     * @param {LinkCreateManyAndReturnArgs} args - Arguments to create many Links.
     * @example
     * // Create many Links
     * const link = await prisma.link.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Links and only return the `id`
     * const linkWithIdOnly = await prisma.link.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LinkCreateManyAndReturnArgs>(args?: SelectSubset<T, LinkCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LinkPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Link.
     * @param {LinkDeleteArgs} args - Arguments to delete one Link.
     * @example
     * // Delete one Link
     * const Link = await prisma.link.delete({
     *   where: {
     *     // ... filter to delete one Link
     *   }
     * })
     * 
     */
    delete<T extends LinkDeleteArgs>(args: SelectSubset<T, LinkDeleteArgs<ExtArgs>>): Prisma__LinkClient<$Result.GetResult<Prisma.$LinkPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Link.
     * @param {LinkUpdateArgs} args - Arguments to update one Link.
     * @example
     * // Update one Link
     * const link = await prisma.link.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LinkUpdateArgs>(args: SelectSubset<T, LinkUpdateArgs<ExtArgs>>): Prisma__LinkClient<$Result.GetResult<Prisma.$LinkPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Links.
     * @param {LinkDeleteManyArgs} args - Arguments to filter Links to delete.
     * @example
     * // Delete a few Links
     * const { count } = await prisma.link.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LinkDeleteManyArgs>(args?: SelectSubset<T, LinkDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Links.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Links
     * const link = await prisma.link.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LinkUpdateManyArgs>(args: SelectSubset<T, LinkUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Links and returns the data updated in the database.
     * @param {LinkUpdateManyAndReturnArgs} args - Arguments to update many Links.
     * @example
     * // Update many Links
     * const link = await prisma.link.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Links and only return the `id`
     * const linkWithIdOnly = await prisma.link.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LinkUpdateManyAndReturnArgs>(args: SelectSubset<T, LinkUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LinkPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Link.
     * @param {LinkUpsertArgs} args - Arguments to update or create a Link.
     * @example
     * // Update or create a Link
     * const link = await prisma.link.upsert({
     *   create: {
     *     // ... data to create a Link
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Link we want to update
     *   }
     * })
     */
    upsert<T extends LinkUpsertArgs>(args: SelectSubset<T, LinkUpsertArgs<ExtArgs>>): Prisma__LinkClient<$Result.GetResult<Prisma.$LinkPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Links.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkCountArgs} args - Arguments to filter Links to count.
     * @example
     * // Count the number of Links
     * const count = await prisma.link.count({
     *   where: {
     *     // ... the filter for the Links we want to count
     *   }
     * })
    **/
    count<T extends LinkCountArgs>(
      args?: Subset<T, LinkCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LinkCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Link.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LinkAggregateArgs>(args: Subset<T, LinkAggregateArgs>): Prisma.PrismaPromise<GetLinkAggregateType<T>>

    /**
     * Group by Link.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LinkGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LinkGroupByArgs['orderBy'] }
        : { orderBy?: LinkGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LinkGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLinkGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Link model
   */
  readonly fields: LinkFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Link.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LinkClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends Link$userArgs<ExtArgs> = {}>(args?: Subset<T, Link$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    linkTags<T extends Link$linkTagsArgs<ExtArgs> = {}>(args?: Subset<T, Link$linkTagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LinkTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Link model
   */
  interface LinkFieldRefs {
    readonly id: FieldRef<"Link", 'Int'>
    readonly title: FieldRef<"Link", 'String'>
    readonly description: FieldRef<"Link", 'String'>
    readonly logo: FieldRef<"Link", 'String'>
    readonly img: FieldRef<"Link", 'String'>
    readonly url: FieldRef<"Link", 'String'>
    readonly shortUrl: FieldRef<"Link", 'String'>
    readonly comment: FieldRef<"Link", 'String'>
    readonly createdAt: FieldRef<"Link", 'DateTime'>
    readonly updatedAt: FieldRef<"Link", 'DateTime'>
    readonly userId: FieldRef<"Link", 'Int'>
    readonly guestId: FieldRef<"Link", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Link findUnique
   */
  export type LinkFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Link
     */
    select?: LinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Link
     */
    omit?: LinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkInclude<ExtArgs> | null
    /**
     * Filter, which Link to fetch.
     */
    where: LinkWhereUniqueInput
  }

  /**
   * Link findUniqueOrThrow
   */
  export type LinkFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Link
     */
    select?: LinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Link
     */
    omit?: LinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkInclude<ExtArgs> | null
    /**
     * Filter, which Link to fetch.
     */
    where: LinkWhereUniqueInput
  }

  /**
   * Link findFirst
   */
  export type LinkFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Link
     */
    select?: LinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Link
     */
    omit?: LinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkInclude<ExtArgs> | null
    /**
     * Filter, which Link to fetch.
     */
    where?: LinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Links to fetch.
     */
    orderBy?: LinkOrderByWithRelationInput | LinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Links.
     */
    cursor?: LinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Links from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Links.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Links.
     */
    distinct?: LinkScalarFieldEnum | LinkScalarFieldEnum[]
  }

  /**
   * Link findFirstOrThrow
   */
  export type LinkFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Link
     */
    select?: LinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Link
     */
    omit?: LinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkInclude<ExtArgs> | null
    /**
     * Filter, which Link to fetch.
     */
    where?: LinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Links to fetch.
     */
    orderBy?: LinkOrderByWithRelationInput | LinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Links.
     */
    cursor?: LinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Links from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Links.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Links.
     */
    distinct?: LinkScalarFieldEnum | LinkScalarFieldEnum[]
  }

  /**
   * Link findMany
   */
  export type LinkFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Link
     */
    select?: LinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Link
     */
    omit?: LinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkInclude<ExtArgs> | null
    /**
     * Filter, which Links to fetch.
     */
    where?: LinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Links to fetch.
     */
    orderBy?: LinkOrderByWithRelationInput | LinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Links.
     */
    cursor?: LinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Links from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Links.
     */
    skip?: number
    distinct?: LinkScalarFieldEnum | LinkScalarFieldEnum[]
  }

  /**
   * Link create
   */
  export type LinkCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Link
     */
    select?: LinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Link
     */
    omit?: LinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkInclude<ExtArgs> | null
    /**
     * The data needed to create a Link.
     */
    data: XOR<LinkCreateInput, LinkUncheckedCreateInput>
  }

  /**
   * Link createMany
   */
  export type LinkCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Links.
     */
    data: LinkCreateManyInput | LinkCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Link createManyAndReturn
   */
  export type LinkCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Link
     */
    select?: LinkSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Link
     */
    omit?: LinkOmit<ExtArgs> | null
    /**
     * The data used to create many Links.
     */
    data: LinkCreateManyInput | LinkCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Link update
   */
  export type LinkUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Link
     */
    select?: LinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Link
     */
    omit?: LinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkInclude<ExtArgs> | null
    /**
     * The data needed to update a Link.
     */
    data: XOR<LinkUpdateInput, LinkUncheckedUpdateInput>
    /**
     * Choose, which Link to update.
     */
    where: LinkWhereUniqueInput
  }

  /**
   * Link updateMany
   */
  export type LinkUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Links.
     */
    data: XOR<LinkUpdateManyMutationInput, LinkUncheckedUpdateManyInput>
    /**
     * Filter which Links to update
     */
    where?: LinkWhereInput
    /**
     * Limit how many Links to update.
     */
    limit?: number
  }

  /**
   * Link updateManyAndReturn
   */
  export type LinkUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Link
     */
    select?: LinkSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Link
     */
    omit?: LinkOmit<ExtArgs> | null
    /**
     * The data used to update Links.
     */
    data: XOR<LinkUpdateManyMutationInput, LinkUncheckedUpdateManyInput>
    /**
     * Filter which Links to update
     */
    where?: LinkWhereInput
    /**
     * Limit how many Links to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Link upsert
   */
  export type LinkUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Link
     */
    select?: LinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Link
     */
    omit?: LinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkInclude<ExtArgs> | null
    /**
     * The filter to search for the Link to update in case it exists.
     */
    where: LinkWhereUniqueInput
    /**
     * In case the Link found by the `where` argument doesn't exist, create a new Link with this data.
     */
    create: XOR<LinkCreateInput, LinkUncheckedCreateInput>
    /**
     * In case the Link was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LinkUpdateInput, LinkUncheckedUpdateInput>
  }

  /**
   * Link delete
   */
  export type LinkDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Link
     */
    select?: LinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Link
     */
    omit?: LinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkInclude<ExtArgs> | null
    /**
     * Filter which Link to delete.
     */
    where: LinkWhereUniqueInput
  }

  /**
   * Link deleteMany
   */
  export type LinkDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Links to delete
     */
    where?: LinkWhereInput
    /**
     * Limit how many Links to delete.
     */
    limit?: number
  }

  /**
   * Link.user
   */
  export type Link$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Link.linkTags
   */
  export type Link$linkTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkTag
     */
    select?: LinkTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LinkTag
     */
    omit?: LinkTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkTagInclude<ExtArgs> | null
    where?: LinkTagWhereInput
    orderBy?: LinkTagOrderByWithRelationInput | LinkTagOrderByWithRelationInput[]
    cursor?: LinkTagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LinkTagScalarFieldEnum | LinkTagScalarFieldEnum[]
  }

  /**
   * Link without action
   */
  export type LinkDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Link
     */
    select?: LinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Link
     */
    omit?: LinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkInclude<ExtArgs> | null
  }


  /**
   * Model Tag
   */

  export type AggregateTag = {
    _count: TagCountAggregateOutputType | null
    _avg: TagAvgAggregateOutputType | null
    _sum: TagSumAggregateOutputType | null
    _min: TagMinAggregateOutputType | null
    _max: TagMaxAggregateOutputType | null
  }

  export type TagAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type TagSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type TagMinAggregateOutputType = {
    id: number | null
    value: string | null
    label: string | null
    userId: number | null
    guestId: string | null
  }

  export type TagMaxAggregateOutputType = {
    id: number | null
    value: string | null
    label: string | null
    userId: number | null
    guestId: string | null
  }

  export type TagCountAggregateOutputType = {
    id: number
    value: number
    label: number
    userId: number
    guestId: number
    _all: number
  }


  export type TagAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type TagSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type TagMinAggregateInputType = {
    id?: true
    value?: true
    label?: true
    userId?: true
    guestId?: true
  }

  export type TagMaxAggregateInputType = {
    id?: true
    value?: true
    label?: true
    userId?: true
    guestId?: true
  }

  export type TagCountAggregateInputType = {
    id?: true
    value?: true
    label?: true
    userId?: true
    guestId?: true
    _all?: true
  }

  export type TagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tag to aggregate.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tags
    **/
    _count?: true | TagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TagAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TagSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TagMaxAggregateInputType
  }

  export type GetTagAggregateType<T extends TagAggregateArgs> = {
        [P in keyof T & keyof AggregateTag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTag[P]>
      : GetScalarType<T[P], AggregateTag[P]>
  }




  export type TagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TagWhereInput
    orderBy?: TagOrderByWithAggregationInput | TagOrderByWithAggregationInput[]
    by: TagScalarFieldEnum[] | TagScalarFieldEnum
    having?: TagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TagCountAggregateInputType | true
    _avg?: TagAvgAggregateInputType
    _sum?: TagSumAggregateInputType
    _min?: TagMinAggregateInputType
    _max?: TagMaxAggregateInputType
  }

  export type TagGroupByOutputType = {
    id: number
    value: string
    label: string
    userId: number | null
    guestId: string
    _count: TagCountAggregateOutputType | null
    _avg: TagAvgAggregateOutputType | null
    _sum: TagSumAggregateOutputType | null
    _min: TagMinAggregateOutputType | null
    _max: TagMaxAggregateOutputType | null
  }

  type GetTagGroupByPayload<T extends TagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TagGroupByOutputType[P]>
            : GetScalarType<T[P], TagGroupByOutputType[P]>
        }
      >
    >


  export type TagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    value?: boolean
    label?: boolean
    userId?: boolean
    guestId?: boolean
    user?: boolean | Tag$userArgs<ExtArgs>
    links?: boolean | Tag$linksArgs<ExtArgs>
    _count?: boolean | TagCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tag"]>

  export type TagSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    value?: boolean
    label?: boolean
    userId?: boolean
    guestId?: boolean
    user?: boolean | Tag$userArgs<ExtArgs>
  }, ExtArgs["result"]["tag"]>

  export type TagSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    value?: boolean
    label?: boolean
    userId?: boolean
    guestId?: boolean
    user?: boolean | Tag$userArgs<ExtArgs>
  }, ExtArgs["result"]["tag"]>

  export type TagSelectScalar = {
    id?: boolean
    value?: boolean
    label?: boolean
    userId?: boolean
    guestId?: boolean
  }

  export type TagOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "value" | "label" | "userId" | "guestId", ExtArgs["result"]["tag"]>
  export type TagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Tag$userArgs<ExtArgs>
    links?: boolean | Tag$linksArgs<ExtArgs>
    _count?: boolean | TagCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TagIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Tag$userArgs<ExtArgs>
  }
  export type TagIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Tag$userArgs<ExtArgs>
  }

  export type $TagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tag"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
      links: Prisma.$LinkTagPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      value: string
      label: string
      userId: number | null
      guestId: string
    }, ExtArgs["result"]["tag"]>
    composites: {}
  }

  type TagGetPayload<S extends boolean | null | undefined | TagDefaultArgs> = $Result.GetResult<Prisma.$TagPayload, S>

  type TagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TagFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TagCountAggregateInputType | true
    }

  export interface TagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tag'], meta: { name: 'Tag' } }
    /**
     * Find zero or one Tag that matches the filter.
     * @param {TagFindUniqueArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TagFindUniqueArgs>(args: SelectSubset<T, TagFindUniqueArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tag that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TagFindUniqueOrThrowArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TagFindUniqueOrThrowArgs>(args: SelectSubset<T, TagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindFirstArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TagFindFirstArgs>(args?: SelectSubset<T, TagFindFirstArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindFirstOrThrowArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TagFindFirstOrThrowArgs>(args?: SelectSubset<T, TagFindFirstOrThrowArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tags
     * const tags = await prisma.tag.findMany()
     * 
     * // Get first 10 Tags
     * const tags = await prisma.tag.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tagWithIdOnly = await prisma.tag.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TagFindManyArgs>(args?: SelectSubset<T, TagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tag.
     * @param {TagCreateArgs} args - Arguments to create a Tag.
     * @example
     * // Create one Tag
     * const Tag = await prisma.tag.create({
     *   data: {
     *     // ... data to create a Tag
     *   }
     * })
     * 
     */
    create<T extends TagCreateArgs>(args: SelectSubset<T, TagCreateArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tags.
     * @param {TagCreateManyArgs} args - Arguments to create many Tags.
     * @example
     * // Create many Tags
     * const tag = await prisma.tag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TagCreateManyArgs>(args?: SelectSubset<T, TagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tags and returns the data saved in the database.
     * @param {TagCreateManyAndReturnArgs} args - Arguments to create many Tags.
     * @example
     * // Create many Tags
     * const tag = await prisma.tag.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tags and only return the `id`
     * const tagWithIdOnly = await prisma.tag.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TagCreateManyAndReturnArgs>(args?: SelectSubset<T, TagCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tag.
     * @param {TagDeleteArgs} args - Arguments to delete one Tag.
     * @example
     * // Delete one Tag
     * const Tag = await prisma.tag.delete({
     *   where: {
     *     // ... filter to delete one Tag
     *   }
     * })
     * 
     */
    delete<T extends TagDeleteArgs>(args: SelectSubset<T, TagDeleteArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tag.
     * @param {TagUpdateArgs} args - Arguments to update one Tag.
     * @example
     * // Update one Tag
     * const tag = await prisma.tag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TagUpdateArgs>(args: SelectSubset<T, TagUpdateArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tags.
     * @param {TagDeleteManyArgs} args - Arguments to filter Tags to delete.
     * @example
     * // Delete a few Tags
     * const { count } = await prisma.tag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TagDeleteManyArgs>(args?: SelectSubset<T, TagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tags
     * const tag = await prisma.tag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TagUpdateManyArgs>(args: SelectSubset<T, TagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tags and returns the data updated in the database.
     * @param {TagUpdateManyAndReturnArgs} args - Arguments to update many Tags.
     * @example
     * // Update many Tags
     * const tag = await prisma.tag.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tags and only return the `id`
     * const tagWithIdOnly = await prisma.tag.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TagUpdateManyAndReturnArgs>(args: SelectSubset<T, TagUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tag.
     * @param {TagUpsertArgs} args - Arguments to update or create a Tag.
     * @example
     * // Update or create a Tag
     * const tag = await prisma.tag.upsert({
     *   create: {
     *     // ... data to create a Tag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tag we want to update
     *   }
     * })
     */
    upsert<T extends TagUpsertArgs>(args: SelectSubset<T, TagUpsertArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagCountArgs} args - Arguments to filter Tags to count.
     * @example
     * // Count the number of Tags
     * const count = await prisma.tag.count({
     *   where: {
     *     // ... the filter for the Tags we want to count
     *   }
     * })
    **/
    count<T extends TagCountArgs>(
      args?: Subset<T, TagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TagAggregateArgs>(args: Subset<T, TagAggregateArgs>): Prisma.PrismaPromise<GetTagAggregateType<T>>

    /**
     * Group by Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TagGroupByArgs['orderBy'] }
        : { orderBy?: TagGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tag model
   */
  readonly fields: TagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends Tag$userArgs<ExtArgs> = {}>(args?: Subset<T, Tag$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    links<T extends Tag$linksArgs<ExtArgs> = {}>(args?: Subset<T, Tag$linksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LinkTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Tag model
   */
  interface TagFieldRefs {
    readonly id: FieldRef<"Tag", 'Int'>
    readonly value: FieldRef<"Tag", 'String'>
    readonly label: FieldRef<"Tag", 'String'>
    readonly userId: FieldRef<"Tag", 'Int'>
    readonly guestId: FieldRef<"Tag", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Tag findUnique
   */
  export type TagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag findUniqueOrThrow
   */
  export type TagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag findFirst
   */
  export type TagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tags.
     */
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag findFirstOrThrow
   */
  export type TagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tags.
     */
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag findMany
   */
  export type TagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tags to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag create
   */
  export type TagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The data needed to create a Tag.
     */
    data: XOR<TagCreateInput, TagUncheckedCreateInput>
  }

  /**
   * Tag createMany
   */
  export type TagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tags.
     */
    data: TagCreateManyInput | TagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tag createManyAndReturn
   */
  export type TagCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * The data used to create many Tags.
     */
    data: TagCreateManyInput | TagCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Tag update
   */
  export type TagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The data needed to update a Tag.
     */
    data: XOR<TagUpdateInput, TagUncheckedUpdateInput>
    /**
     * Choose, which Tag to update.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag updateMany
   */
  export type TagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tags.
     */
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyInput>
    /**
     * Filter which Tags to update
     */
    where?: TagWhereInput
    /**
     * Limit how many Tags to update.
     */
    limit?: number
  }

  /**
   * Tag updateManyAndReturn
   */
  export type TagUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * The data used to update Tags.
     */
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyInput>
    /**
     * Filter which Tags to update
     */
    where?: TagWhereInput
    /**
     * Limit how many Tags to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Tag upsert
   */
  export type TagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The filter to search for the Tag to update in case it exists.
     */
    where: TagWhereUniqueInput
    /**
     * In case the Tag found by the `where` argument doesn't exist, create a new Tag with this data.
     */
    create: XOR<TagCreateInput, TagUncheckedCreateInput>
    /**
     * In case the Tag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TagUpdateInput, TagUncheckedUpdateInput>
  }

  /**
   * Tag delete
   */
  export type TagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter which Tag to delete.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag deleteMany
   */
  export type TagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tags to delete
     */
    where?: TagWhereInput
    /**
     * Limit how many Tags to delete.
     */
    limit?: number
  }

  /**
   * Tag.user
   */
  export type Tag$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Tag.links
   */
  export type Tag$linksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkTag
     */
    select?: LinkTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LinkTag
     */
    omit?: LinkTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkTagInclude<ExtArgs> | null
    where?: LinkTagWhereInput
    orderBy?: LinkTagOrderByWithRelationInput | LinkTagOrderByWithRelationInput[]
    cursor?: LinkTagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LinkTagScalarFieldEnum | LinkTagScalarFieldEnum[]
  }

  /**
   * Tag without action
   */
  export type TagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
  }


  /**
   * Model LinkTag
   */

  export type AggregateLinkTag = {
    _count: LinkTagCountAggregateOutputType | null
    _avg: LinkTagAvgAggregateOutputType | null
    _sum: LinkTagSumAggregateOutputType | null
    _min: LinkTagMinAggregateOutputType | null
    _max: LinkTagMaxAggregateOutputType | null
  }

  export type LinkTagAvgAggregateOutputType = {
    id: number | null
    linkId: number | null
    tagId: number | null
    userId: number | null
  }

  export type LinkTagSumAggregateOutputType = {
    id: number | null
    linkId: number | null
    tagId: number | null
    userId: number | null
  }

  export type LinkTagMinAggregateOutputType = {
    id: number | null
    linkId: number | null
    tagId: number | null
    userId: number | null
    guestId: string | null
  }

  export type LinkTagMaxAggregateOutputType = {
    id: number | null
    linkId: number | null
    tagId: number | null
    userId: number | null
    guestId: string | null
  }

  export type LinkTagCountAggregateOutputType = {
    id: number
    linkId: number
    tagId: number
    userId: number
    guestId: number
    _all: number
  }


  export type LinkTagAvgAggregateInputType = {
    id?: true
    linkId?: true
    tagId?: true
    userId?: true
  }

  export type LinkTagSumAggregateInputType = {
    id?: true
    linkId?: true
    tagId?: true
    userId?: true
  }

  export type LinkTagMinAggregateInputType = {
    id?: true
    linkId?: true
    tagId?: true
    userId?: true
    guestId?: true
  }

  export type LinkTagMaxAggregateInputType = {
    id?: true
    linkId?: true
    tagId?: true
    userId?: true
    guestId?: true
  }

  export type LinkTagCountAggregateInputType = {
    id?: true
    linkId?: true
    tagId?: true
    userId?: true
    guestId?: true
    _all?: true
  }

  export type LinkTagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LinkTag to aggregate.
     */
    where?: LinkTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LinkTags to fetch.
     */
    orderBy?: LinkTagOrderByWithRelationInput | LinkTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LinkTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LinkTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LinkTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LinkTags
    **/
    _count?: true | LinkTagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LinkTagAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LinkTagSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LinkTagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LinkTagMaxAggregateInputType
  }

  export type GetLinkTagAggregateType<T extends LinkTagAggregateArgs> = {
        [P in keyof T & keyof AggregateLinkTag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLinkTag[P]>
      : GetScalarType<T[P], AggregateLinkTag[P]>
  }




  export type LinkTagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LinkTagWhereInput
    orderBy?: LinkTagOrderByWithAggregationInput | LinkTagOrderByWithAggregationInput[]
    by: LinkTagScalarFieldEnum[] | LinkTagScalarFieldEnum
    having?: LinkTagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LinkTagCountAggregateInputType | true
    _avg?: LinkTagAvgAggregateInputType
    _sum?: LinkTagSumAggregateInputType
    _min?: LinkTagMinAggregateInputType
    _max?: LinkTagMaxAggregateInputType
  }

  export type LinkTagGroupByOutputType = {
    id: number
    linkId: number
    tagId: number
    userId: number | null
    guestId: string
    _count: LinkTagCountAggregateOutputType | null
    _avg: LinkTagAvgAggregateOutputType | null
    _sum: LinkTagSumAggregateOutputType | null
    _min: LinkTagMinAggregateOutputType | null
    _max: LinkTagMaxAggregateOutputType | null
  }

  type GetLinkTagGroupByPayload<T extends LinkTagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LinkTagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LinkTagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LinkTagGroupByOutputType[P]>
            : GetScalarType<T[P], LinkTagGroupByOutputType[P]>
        }
      >
    >


  export type LinkTagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    linkId?: boolean
    tagId?: boolean
    userId?: boolean
    guestId?: boolean
    link?: boolean | LinkDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
    user?: boolean | LinkTag$userArgs<ExtArgs>
  }, ExtArgs["result"]["linkTag"]>

  export type LinkTagSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    linkId?: boolean
    tagId?: boolean
    userId?: boolean
    guestId?: boolean
    link?: boolean | LinkDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
    user?: boolean | LinkTag$userArgs<ExtArgs>
  }, ExtArgs["result"]["linkTag"]>

  export type LinkTagSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    linkId?: boolean
    tagId?: boolean
    userId?: boolean
    guestId?: boolean
    link?: boolean | LinkDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
    user?: boolean | LinkTag$userArgs<ExtArgs>
  }, ExtArgs["result"]["linkTag"]>

  export type LinkTagSelectScalar = {
    id?: boolean
    linkId?: boolean
    tagId?: boolean
    userId?: boolean
    guestId?: boolean
  }

  export type LinkTagOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "linkId" | "tagId" | "userId" | "guestId", ExtArgs["result"]["linkTag"]>
  export type LinkTagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    link?: boolean | LinkDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
    user?: boolean | LinkTag$userArgs<ExtArgs>
  }
  export type LinkTagIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    link?: boolean | LinkDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
    user?: boolean | LinkTag$userArgs<ExtArgs>
  }
  export type LinkTagIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    link?: boolean | LinkDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
    user?: boolean | LinkTag$userArgs<ExtArgs>
  }

  export type $LinkTagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LinkTag"
    objects: {
      link: Prisma.$LinkPayload<ExtArgs>
      tag: Prisma.$TagPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      linkId: number
      tagId: number
      userId: number | null
      guestId: string
    }, ExtArgs["result"]["linkTag"]>
    composites: {}
  }

  type LinkTagGetPayload<S extends boolean | null | undefined | LinkTagDefaultArgs> = $Result.GetResult<Prisma.$LinkTagPayload, S>

  type LinkTagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LinkTagFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LinkTagCountAggregateInputType | true
    }

  export interface LinkTagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LinkTag'], meta: { name: 'LinkTag' } }
    /**
     * Find zero or one LinkTag that matches the filter.
     * @param {LinkTagFindUniqueArgs} args - Arguments to find a LinkTag
     * @example
     * // Get one LinkTag
     * const linkTag = await prisma.linkTag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LinkTagFindUniqueArgs>(args: SelectSubset<T, LinkTagFindUniqueArgs<ExtArgs>>): Prisma__LinkTagClient<$Result.GetResult<Prisma.$LinkTagPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LinkTag that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LinkTagFindUniqueOrThrowArgs} args - Arguments to find a LinkTag
     * @example
     * // Get one LinkTag
     * const linkTag = await prisma.linkTag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LinkTagFindUniqueOrThrowArgs>(args: SelectSubset<T, LinkTagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LinkTagClient<$Result.GetResult<Prisma.$LinkTagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LinkTag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkTagFindFirstArgs} args - Arguments to find a LinkTag
     * @example
     * // Get one LinkTag
     * const linkTag = await prisma.linkTag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LinkTagFindFirstArgs>(args?: SelectSubset<T, LinkTagFindFirstArgs<ExtArgs>>): Prisma__LinkTagClient<$Result.GetResult<Prisma.$LinkTagPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LinkTag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkTagFindFirstOrThrowArgs} args - Arguments to find a LinkTag
     * @example
     * // Get one LinkTag
     * const linkTag = await prisma.linkTag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LinkTagFindFirstOrThrowArgs>(args?: SelectSubset<T, LinkTagFindFirstOrThrowArgs<ExtArgs>>): Prisma__LinkTagClient<$Result.GetResult<Prisma.$LinkTagPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LinkTags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkTagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LinkTags
     * const linkTags = await prisma.linkTag.findMany()
     * 
     * // Get first 10 LinkTags
     * const linkTags = await prisma.linkTag.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const linkTagWithIdOnly = await prisma.linkTag.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LinkTagFindManyArgs>(args?: SelectSubset<T, LinkTagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LinkTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LinkTag.
     * @param {LinkTagCreateArgs} args - Arguments to create a LinkTag.
     * @example
     * // Create one LinkTag
     * const LinkTag = await prisma.linkTag.create({
     *   data: {
     *     // ... data to create a LinkTag
     *   }
     * })
     * 
     */
    create<T extends LinkTagCreateArgs>(args: SelectSubset<T, LinkTagCreateArgs<ExtArgs>>): Prisma__LinkTagClient<$Result.GetResult<Prisma.$LinkTagPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LinkTags.
     * @param {LinkTagCreateManyArgs} args - Arguments to create many LinkTags.
     * @example
     * // Create many LinkTags
     * const linkTag = await prisma.linkTag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LinkTagCreateManyArgs>(args?: SelectSubset<T, LinkTagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LinkTags and returns the data saved in the database.
     * @param {LinkTagCreateManyAndReturnArgs} args - Arguments to create many LinkTags.
     * @example
     * // Create many LinkTags
     * const linkTag = await prisma.linkTag.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LinkTags and only return the `id`
     * const linkTagWithIdOnly = await prisma.linkTag.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LinkTagCreateManyAndReturnArgs>(args?: SelectSubset<T, LinkTagCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LinkTagPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LinkTag.
     * @param {LinkTagDeleteArgs} args - Arguments to delete one LinkTag.
     * @example
     * // Delete one LinkTag
     * const LinkTag = await prisma.linkTag.delete({
     *   where: {
     *     // ... filter to delete one LinkTag
     *   }
     * })
     * 
     */
    delete<T extends LinkTagDeleteArgs>(args: SelectSubset<T, LinkTagDeleteArgs<ExtArgs>>): Prisma__LinkTagClient<$Result.GetResult<Prisma.$LinkTagPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LinkTag.
     * @param {LinkTagUpdateArgs} args - Arguments to update one LinkTag.
     * @example
     * // Update one LinkTag
     * const linkTag = await prisma.linkTag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LinkTagUpdateArgs>(args: SelectSubset<T, LinkTagUpdateArgs<ExtArgs>>): Prisma__LinkTagClient<$Result.GetResult<Prisma.$LinkTagPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LinkTags.
     * @param {LinkTagDeleteManyArgs} args - Arguments to filter LinkTags to delete.
     * @example
     * // Delete a few LinkTags
     * const { count } = await prisma.linkTag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LinkTagDeleteManyArgs>(args?: SelectSubset<T, LinkTagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LinkTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkTagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LinkTags
     * const linkTag = await prisma.linkTag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LinkTagUpdateManyArgs>(args: SelectSubset<T, LinkTagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LinkTags and returns the data updated in the database.
     * @param {LinkTagUpdateManyAndReturnArgs} args - Arguments to update many LinkTags.
     * @example
     * // Update many LinkTags
     * const linkTag = await prisma.linkTag.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LinkTags and only return the `id`
     * const linkTagWithIdOnly = await prisma.linkTag.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LinkTagUpdateManyAndReturnArgs>(args: SelectSubset<T, LinkTagUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LinkTagPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LinkTag.
     * @param {LinkTagUpsertArgs} args - Arguments to update or create a LinkTag.
     * @example
     * // Update or create a LinkTag
     * const linkTag = await prisma.linkTag.upsert({
     *   create: {
     *     // ... data to create a LinkTag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LinkTag we want to update
     *   }
     * })
     */
    upsert<T extends LinkTagUpsertArgs>(args: SelectSubset<T, LinkTagUpsertArgs<ExtArgs>>): Prisma__LinkTagClient<$Result.GetResult<Prisma.$LinkTagPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LinkTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkTagCountArgs} args - Arguments to filter LinkTags to count.
     * @example
     * // Count the number of LinkTags
     * const count = await prisma.linkTag.count({
     *   where: {
     *     // ... the filter for the LinkTags we want to count
     *   }
     * })
    **/
    count<T extends LinkTagCountArgs>(
      args?: Subset<T, LinkTagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LinkTagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LinkTag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkTagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LinkTagAggregateArgs>(args: Subset<T, LinkTagAggregateArgs>): Prisma.PrismaPromise<GetLinkTagAggregateType<T>>

    /**
     * Group by LinkTag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkTagGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LinkTagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LinkTagGroupByArgs['orderBy'] }
        : { orderBy?: LinkTagGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LinkTagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLinkTagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LinkTag model
   */
  readonly fields: LinkTagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LinkTag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LinkTagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    link<T extends LinkDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LinkDefaultArgs<ExtArgs>>): Prisma__LinkClient<$Result.GetResult<Prisma.$LinkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tag<T extends TagDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TagDefaultArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends LinkTag$userArgs<ExtArgs> = {}>(args?: Subset<T, LinkTag$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the LinkTag model
   */
  interface LinkTagFieldRefs {
    readonly id: FieldRef<"LinkTag", 'Int'>
    readonly linkId: FieldRef<"LinkTag", 'Int'>
    readonly tagId: FieldRef<"LinkTag", 'Int'>
    readonly userId: FieldRef<"LinkTag", 'Int'>
    readonly guestId: FieldRef<"LinkTag", 'String'>
  }
    

  // Custom InputTypes
  /**
   * LinkTag findUnique
   */
  export type LinkTagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkTag
     */
    select?: LinkTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LinkTag
     */
    omit?: LinkTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkTagInclude<ExtArgs> | null
    /**
     * Filter, which LinkTag to fetch.
     */
    where: LinkTagWhereUniqueInput
  }

  /**
   * LinkTag findUniqueOrThrow
   */
  export type LinkTagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkTag
     */
    select?: LinkTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LinkTag
     */
    omit?: LinkTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkTagInclude<ExtArgs> | null
    /**
     * Filter, which LinkTag to fetch.
     */
    where: LinkTagWhereUniqueInput
  }

  /**
   * LinkTag findFirst
   */
  export type LinkTagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkTag
     */
    select?: LinkTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LinkTag
     */
    omit?: LinkTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkTagInclude<ExtArgs> | null
    /**
     * Filter, which LinkTag to fetch.
     */
    where?: LinkTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LinkTags to fetch.
     */
    orderBy?: LinkTagOrderByWithRelationInput | LinkTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LinkTags.
     */
    cursor?: LinkTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LinkTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LinkTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LinkTags.
     */
    distinct?: LinkTagScalarFieldEnum | LinkTagScalarFieldEnum[]
  }

  /**
   * LinkTag findFirstOrThrow
   */
  export type LinkTagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkTag
     */
    select?: LinkTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LinkTag
     */
    omit?: LinkTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkTagInclude<ExtArgs> | null
    /**
     * Filter, which LinkTag to fetch.
     */
    where?: LinkTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LinkTags to fetch.
     */
    orderBy?: LinkTagOrderByWithRelationInput | LinkTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LinkTags.
     */
    cursor?: LinkTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LinkTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LinkTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LinkTags.
     */
    distinct?: LinkTagScalarFieldEnum | LinkTagScalarFieldEnum[]
  }

  /**
   * LinkTag findMany
   */
  export type LinkTagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkTag
     */
    select?: LinkTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LinkTag
     */
    omit?: LinkTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkTagInclude<ExtArgs> | null
    /**
     * Filter, which LinkTags to fetch.
     */
    where?: LinkTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LinkTags to fetch.
     */
    orderBy?: LinkTagOrderByWithRelationInput | LinkTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LinkTags.
     */
    cursor?: LinkTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LinkTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LinkTags.
     */
    skip?: number
    distinct?: LinkTagScalarFieldEnum | LinkTagScalarFieldEnum[]
  }

  /**
   * LinkTag create
   */
  export type LinkTagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkTag
     */
    select?: LinkTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LinkTag
     */
    omit?: LinkTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkTagInclude<ExtArgs> | null
    /**
     * The data needed to create a LinkTag.
     */
    data: XOR<LinkTagCreateInput, LinkTagUncheckedCreateInput>
  }

  /**
   * LinkTag createMany
   */
  export type LinkTagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LinkTags.
     */
    data: LinkTagCreateManyInput | LinkTagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LinkTag createManyAndReturn
   */
  export type LinkTagCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkTag
     */
    select?: LinkTagSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LinkTag
     */
    omit?: LinkTagOmit<ExtArgs> | null
    /**
     * The data used to create many LinkTags.
     */
    data: LinkTagCreateManyInput | LinkTagCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkTagIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LinkTag update
   */
  export type LinkTagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkTag
     */
    select?: LinkTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LinkTag
     */
    omit?: LinkTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkTagInclude<ExtArgs> | null
    /**
     * The data needed to update a LinkTag.
     */
    data: XOR<LinkTagUpdateInput, LinkTagUncheckedUpdateInput>
    /**
     * Choose, which LinkTag to update.
     */
    where: LinkTagWhereUniqueInput
  }

  /**
   * LinkTag updateMany
   */
  export type LinkTagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LinkTags.
     */
    data: XOR<LinkTagUpdateManyMutationInput, LinkTagUncheckedUpdateManyInput>
    /**
     * Filter which LinkTags to update
     */
    where?: LinkTagWhereInput
    /**
     * Limit how many LinkTags to update.
     */
    limit?: number
  }

  /**
   * LinkTag updateManyAndReturn
   */
  export type LinkTagUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkTag
     */
    select?: LinkTagSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LinkTag
     */
    omit?: LinkTagOmit<ExtArgs> | null
    /**
     * The data used to update LinkTags.
     */
    data: XOR<LinkTagUpdateManyMutationInput, LinkTagUncheckedUpdateManyInput>
    /**
     * Filter which LinkTags to update
     */
    where?: LinkTagWhereInput
    /**
     * Limit how many LinkTags to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkTagIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LinkTag upsert
   */
  export type LinkTagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkTag
     */
    select?: LinkTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LinkTag
     */
    omit?: LinkTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkTagInclude<ExtArgs> | null
    /**
     * The filter to search for the LinkTag to update in case it exists.
     */
    where: LinkTagWhereUniqueInput
    /**
     * In case the LinkTag found by the `where` argument doesn't exist, create a new LinkTag with this data.
     */
    create: XOR<LinkTagCreateInput, LinkTagUncheckedCreateInput>
    /**
     * In case the LinkTag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LinkTagUpdateInput, LinkTagUncheckedUpdateInput>
  }

  /**
   * LinkTag delete
   */
  export type LinkTagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkTag
     */
    select?: LinkTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LinkTag
     */
    omit?: LinkTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkTagInclude<ExtArgs> | null
    /**
     * Filter which LinkTag to delete.
     */
    where: LinkTagWhereUniqueInput
  }

  /**
   * LinkTag deleteMany
   */
  export type LinkTagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LinkTags to delete
     */
    where?: LinkTagWhereInput
    /**
     * Limit how many LinkTags to delete.
     */
    limit?: number
  }

  /**
   * LinkTag.user
   */
  export type LinkTag$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * LinkTag without action
   */
  export type LinkTagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkTag
     */
    select?: LinkTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LinkTag
     */
    omit?: LinkTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkTagInclude<ExtArgs> | null
  }


  /**
   * Model ShortLink
   */

  export type AggregateShortLink = {
    _count: ShortLinkCountAggregateOutputType | null
    _avg: ShortLinkAvgAggregateOutputType | null
    _sum: ShortLinkSumAggregateOutputType | null
    _min: ShortLinkMinAggregateOutputType | null
    _max: ShortLinkMaxAggregateOutputType | null
  }

  export type ShortLinkAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type ShortLinkSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type ShortLinkMinAggregateOutputType = {
    id: number | null
    url: string | null
    shortUrl: string | null
    createdAt: Date | null
    userId: number | null
    guestId: string | null
  }

  export type ShortLinkMaxAggregateOutputType = {
    id: number | null
    url: string | null
    shortUrl: string | null
    createdAt: Date | null
    userId: number | null
    guestId: string | null
  }

  export type ShortLinkCountAggregateOutputType = {
    id: number
    url: number
    shortUrl: number
    createdAt: number
    userId: number
    guestId: number
    _all: number
  }


  export type ShortLinkAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type ShortLinkSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type ShortLinkMinAggregateInputType = {
    id?: true
    url?: true
    shortUrl?: true
    createdAt?: true
    userId?: true
    guestId?: true
  }

  export type ShortLinkMaxAggregateInputType = {
    id?: true
    url?: true
    shortUrl?: true
    createdAt?: true
    userId?: true
    guestId?: true
  }

  export type ShortLinkCountAggregateInputType = {
    id?: true
    url?: true
    shortUrl?: true
    createdAt?: true
    userId?: true
    guestId?: true
    _all?: true
  }

  export type ShortLinkAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShortLink to aggregate.
     */
    where?: ShortLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShortLinks to fetch.
     */
    orderBy?: ShortLinkOrderByWithRelationInput | ShortLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ShortLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShortLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShortLinks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ShortLinks
    **/
    _count?: true | ShortLinkCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ShortLinkAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ShortLinkSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShortLinkMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShortLinkMaxAggregateInputType
  }

  export type GetShortLinkAggregateType<T extends ShortLinkAggregateArgs> = {
        [P in keyof T & keyof AggregateShortLink]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShortLink[P]>
      : GetScalarType<T[P], AggregateShortLink[P]>
  }




  export type ShortLinkGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShortLinkWhereInput
    orderBy?: ShortLinkOrderByWithAggregationInput | ShortLinkOrderByWithAggregationInput[]
    by: ShortLinkScalarFieldEnum[] | ShortLinkScalarFieldEnum
    having?: ShortLinkScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShortLinkCountAggregateInputType | true
    _avg?: ShortLinkAvgAggregateInputType
    _sum?: ShortLinkSumAggregateInputType
    _min?: ShortLinkMinAggregateInputType
    _max?: ShortLinkMaxAggregateInputType
  }

  export type ShortLinkGroupByOutputType = {
    id: number
    url: string
    shortUrl: string
    createdAt: Date
    userId: number | null
    guestId: string
    _count: ShortLinkCountAggregateOutputType | null
    _avg: ShortLinkAvgAggregateOutputType | null
    _sum: ShortLinkSumAggregateOutputType | null
    _min: ShortLinkMinAggregateOutputType | null
    _max: ShortLinkMaxAggregateOutputType | null
  }

  type GetShortLinkGroupByPayload<T extends ShortLinkGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ShortLinkGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShortLinkGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShortLinkGroupByOutputType[P]>
            : GetScalarType<T[P], ShortLinkGroupByOutputType[P]>
        }
      >
    >


  export type ShortLinkSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    shortUrl?: boolean
    createdAt?: boolean
    userId?: boolean
    guestId?: boolean
    user?: boolean | ShortLink$userArgs<ExtArgs>
  }, ExtArgs["result"]["shortLink"]>

  export type ShortLinkSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    shortUrl?: boolean
    createdAt?: boolean
    userId?: boolean
    guestId?: boolean
    user?: boolean | ShortLink$userArgs<ExtArgs>
  }, ExtArgs["result"]["shortLink"]>

  export type ShortLinkSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    shortUrl?: boolean
    createdAt?: boolean
    userId?: boolean
    guestId?: boolean
    user?: boolean | ShortLink$userArgs<ExtArgs>
  }, ExtArgs["result"]["shortLink"]>

  export type ShortLinkSelectScalar = {
    id?: boolean
    url?: boolean
    shortUrl?: boolean
    createdAt?: boolean
    userId?: boolean
    guestId?: boolean
  }

  export type ShortLinkOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "url" | "shortUrl" | "createdAt" | "userId" | "guestId", ExtArgs["result"]["shortLink"]>
  export type ShortLinkInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | ShortLink$userArgs<ExtArgs>
  }
  export type ShortLinkIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | ShortLink$userArgs<ExtArgs>
  }
  export type ShortLinkIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | ShortLink$userArgs<ExtArgs>
  }

  export type $ShortLinkPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ShortLink"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      url: string
      shortUrl: string
      createdAt: Date
      userId: number | null
      guestId: string
    }, ExtArgs["result"]["shortLink"]>
    composites: {}
  }

  type ShortLinkGetPayload<S extends boolean | null | undefined | ShortLinkDefaultArgs> = $Result.GetResult<Prisma.$ShortLinkPayload, S>

  type ShortLinkCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ShortLinkFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ShortLinkCountAggregateInputType | true
    }

  export interface ShortLinkDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ShortLink'], meta: { name: 'ShortLink' } }
    /**
     * Find zero or one ShortLink that matches the filter.
     * @param {ShortLinkFindUniqueArgs} args - Arguments to find a ShortLink
     * @example
     * // Get one ShortLink
     * const shortLink = await prisma.shortLink.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ShortLinkFindUniqueArgs>(args: SelectSubset<T, ShortLinkFindUniqueArgs<ExtArgs>>): Prisma__ShortLinkClient<$Result.GetResult<Prisma.$ShortLinkPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ShortLink that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ShortLinkFindUniqueOrThrowArgs} args - Arguments to find a ShortLink
     * @example
     * // Get one ShortLink
     * const shortLink = await prisma.shortLink.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ShortLinkFindUniqueOrThrowArgs>(args: SelectSubset<T, ShortLinkFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ShortLinkClient<$Result.GetResult<Prisma.$ShortLinkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ShortLink that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShortLinkFindFirstArgs} args - Arguments to find a ShortLink
     * @example
     * // Get one ShortLink
     * const shortLink = await prisma.shortLink.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ShortLinkFindFirstArgs>(args?: SelectSubset<T, ShortLinkFindFirstArgs<ExtArgs>>): Prisma__ShortLinkClient<$Result.GetResult<Prisma.$ShortLinkPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ShortLink that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShortLinkFindFirstOrThrowArgs} args - Arguments to find a ShortLink
     * @example
     * // Get one ShortLink
     * const shortLink = await prisma.shortLink.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ShortLinkFindFirstOrThrowArgs>(args?: SelectSubset<T, ShortLinkFindFirstOrThrowArgs<ExtArgs>>): Prisma__ShortLinkClient<$Result.GetResult<Prisma.$ShortLinkPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ShortLinks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShortLinkFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ShortLinks
     * const shortLinks = await prisma.shortLink.findMany()
     * 
     * // Get first 10 ShortLinks
     * const shortLinks = await prisma.shortLink.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const shortLinkWithIdOnly = await prisma.shortLink.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ShortLinkFindManyArgs>(args?: SelectSubset<T, ShortLinkFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShortLinkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ShortLink.
     * @param {ShortLinkCreateArgs} args - Arguments to create a ShortLink.
     * @example
     * // Create one ShortLink
     * const ShortLink = await prisma.shortLink.create({
     *   data: {
     *     // ... data to create a ShortLink
     *   }
     * })
     * 
     */
    create<T extends ShortLinkCreateArgs>(args: SelectSubset<T, ShortLinkCreateArgs<ExtArgs>>): Prisma__ShortLinkClient<$Result.GetResult<Prisma.$ShortLinkPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ShortLinks.
     * @param {ShortLinkCreateManyArgs} args - Arguments to create many ShortLinks.
     * @example
     * // Create many ShortLinks
     * const shortLink = await prisma.shortLink.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ShortLinkCreateManyArgs>(args?: SelectSubset<T, ShortLinkCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ShortLinks and returns the data saved in the database.
     * @param {ShortLinkCreateManyAndReturnArgs} args - Arguments to create many ShortLinks.
     * @example
     * // Create many ShortLinks
     * const shortLink = await prisma.shortLink.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ShortLinks and only return the `id`
     * const shortLinkWithIdOnly = await prisma.shortLink.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ShortLinkCreateManyAndReturnArgs>(args?: SelectSubset<T, ShortLinkCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShortLinkPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ShortLink.
     * @param {ShortLinkDeleteArgs} args - Arguments to delete one ShortLink.
     * @example
     * // Delete one ShortLink
     * const ShortLink = await prisma.shortLink.delete({
     *   where: {
     *     // ... filter to delete one ShortLink
     *   }
     * })
     * 
     */
    delete<T extends ShortLinkDeleteArgs>(args: SelectSubset<T, ShortLinkDeleteArgs<ExtArgs>>): Prisma__ShortLinkClient<$Result.GetResult<Prisma.$ShortLinkPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ShortLink.
     * @param {ShortLinkUpdateArgs} args - Arguments to update one ShortLink.
     * @example
     * // Update one ShortLink
     * const shortLink = await prisma.shortLink.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ShortLinkUpdateArgs>(args: SelectSubset<T, ShortLinkUpdateArgs<ExtArgs>>): Prisma__ShortLinkClient<$Result.GetResult<Prisma.$ShortLinkPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ShortLinks.
     * @param {ShortLinkDeleteManyArgs} args - Arguments to filter ShortLinks to delete.
     * @example
     * // Delete a few ShortLinks
     * const { count } = await prisma.shortLink.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ShortLinkDeleteManyArgs>(args?: SelectSubset<T, ShortLinkDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ShortLinks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShortLinkUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ShortLinks
     * const shortLink = await prisma.shortLink.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ShortLinkUpdateManyArgs>(args: SelectSubset<T, ShortLinkUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ShortLinks and returns the data updated in the database.
     * @param {ShortLinkUpdateManyAndReturnArgs} args - Arguments to update many ShortLinks.
     * @example
     * // Update many ShortLinks
     * const shortLink = await prisma.shortLink.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ShortLinks and only return the `id`
     * const shortLinkWithIdOnly = await prisma.shortLink.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ShortLinkUpdateManyAndReturnArgs>(args: SelectSubset<T, ShortLinkUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShortLinkPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ShortLink.
     * @param {ShortLinkUpsertArgs} args - Arguments to update or create a ShortLink.
     * @example
     * // Update or create a ShortLink
     * const shortLink = await prisma.shortLink.upsert({
     *   create: {
     *     // ... data to create a ShortLink
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ShortLink we want to update
     *   }
     * })
     */
    upsert<T extends ShortLinkUpsertArgs>(args: SelectSubset<T, ShortLinkUpsertArgs<ExtArgs>>): Prisma__ShortLinkClient<$Result.GetResult<Prisma.$ShortLinkPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ShortLinks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShortLinkCountArgs} args - Arguments to filter ShortLinks to count.
     * @example
     * // Count the number of ShortLinks
     * const count = await prisma.shortLink.count({
     *   where: {
     *     // ... the filter for the ShortLinks we want to count
     *   }
     * })
    **/
    count<T extends ShortLinkCountArgs>(
      args?: Subset<T, ShortLinkCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShortLinkCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ShortLink.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShortLinkAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ShortLinkAggregateArgs>(args: Subset<T, ShortLinkAggregateArgs>): Prisma.PrismaPromise<GetShortLinkAggregateType<T>>

    /**
     * Group by ShortLink.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShortLinkGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ShortLinkGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ShortLinkGroupByArgs['orderBy'] }
        : { orderBy?: ShortLinkGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ShortLinkGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShortLinkGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ShortLink model
   */
  readonly fields: ShortLinkFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ShortLink.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ShortLinkClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends ShortLink$userArgs<ExtArgs> = {}>(args?: Subset<T, ShortLink$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ShortLink model
   */
  interface ShortLinkFieldRefs {
    readonly id: FieldRef<"ShortLink", 'Int'>
    readonly url: FieldRef<"ShortLink", 'String'>
    readonly shortUrl: FieldRef<"ShortLink", 'String'>
    readonly createdAt: FieldRef<"ShortLink", 'DateTime'>
    readonly userId: FieldRef<"ShortLink", 'Int'>
    readonly guestId: FieldRef<"ShortLink", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ShortLink findUnique
   */
  export type ShortLinkFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShortLink
     */
    select?: ShortLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShortLink
     */
    omit?: ShortLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShortLinkInclude<ExtArgs> | null
    /**
     * Filter, which ShortLink to fetch.
     */
    where: ShortLinkWhereUniqueInput
  }

  /**
   * ShortLink findUniqueOrThrow
   */
  export type ShortLinkFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShortLink
     */
    select?: ShortLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShortLink
     */
    omit?: ShortLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShortLinkInclude<ExtArgs> | null
    /**
     * Filter, which ShortLink to fetch.
     */
    where: ShortLinkWhereUniqueInput
  }

  /**
   * ShortLink findFirst
   */
  export type ShortLinkFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShortLink
     */
    select?: ShortLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShortLink
     */
    omit?: ShortLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShortLinkInclude<ExtArgs> | null
    /**
     * Filter, which ShortLink to fetch.
     */
    where?: ShortLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShortLinks to fetch.
     */
    orderBy?: ShortLinkOrderByWithRelationInput | ShortLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShortLinks.
     */
    cursor?: ShortLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShortLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShortLinks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShortLinks.
     */
    distinct?: ShortLinkScalarFieldEnum | ShortLinkScalarFieldEnum[]
  }

  /**
   * ShortLink findFirstOrThrow
   */
  export type ShortLinkFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShortLink
     */
    select?: ShortLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShortLink
     */
    omit?: ShortLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShortLinkInclude<ExtArgs> | null
    /**
     * Filter, which ShortLink to fetch.
     */
    where?: ShortLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShortLinks to fetch.
     */
    orderBy?: ShortLinkOrderByWithRelationInput | ShortLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShortLinks.
     */
    cursor?: ShortLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShortLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShortLinks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShortLinks.
     */
    distinct?: ShortLinkScalarFieldEnum | ShortLinkScalarFieldEnum[]
  }

  /**
   * ShortLink findMany
   */
  export type ShortLinkFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShortLink
     */
    select?: ShortLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShortLink
     */
    omit?: ShortLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShortLinkInclude<ExtArgs> | null
    /**
     * Filter, which ShortLinks to fetch.
     */
    where?: ShortLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShortLinks to fetch.
     */
    orderBy?: ShortLinkOrderByWithRelationInput | ShortLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ShortLinks.
     */
    cursor?: ShortLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShortLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShortLinks.
     */
    skip?: number
    distinct?: ShortLinkScalarFieldEnum | ShortLinkScalarFieldEnum[]
  }

  /**
   * ShortLink create
   */
  export type ShortLinkCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShortLink
     */
    select?: ShortLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShortLink
     */
    omit?: ShortLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShortLinkInclude<ExtArgs> | null
    /**
     * The data needed to create a ShortLink.
     */
    data: XOR<ShortLinkCreateInput, ShortLinkUncheckedCreateInput>
  }

  /**
   * ShortLink createMany
   */
  export type ShortLinkCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ShortLinks.
     */
    data: ShortLinkCreateManyInput | ShortLinkCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ShortLink createManyAndReturn
   */
  export type ShortLinkCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShortLink
     */
    select?: ShortLinkSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ShortLink
     */
    omit?: ShortLinkOmit<ExtArgs> | null
    /**
     * The data used to create many ShortLinks.
     */
    data: ShortLinkCreateManyInput | ShortLinkCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShortLinkIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ShortLink update
   */
  export type ShortLinkUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShortLink
     */
    select?: ShortLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShortLink
     */
    omit?: ShortLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShortLinkInclude<ExtArgs> | null
    /**
     * The data needed to update a ShortLink.
     */
    data: XOR<ShortLinkUpdateInput, ShortLinkUncheckedUpdateInput>
    /**
     * Choose, which ShortLink to update.
     */
    where: ShortLinkWhereUniqueInput
  }

  /**
   * ShortLink updateMany
   */
  export type ShortLinkUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ShortLinks.
     */
    data: XOR<ShortLinkUpdateManyMutationInput, ShortLinkUncheckedUpdateManyInput>
    /**
     * Filter which ShortLinks to update
     */
    where?: ShortLinkWhereInput
    /**
     * Limit how many ShortLinks to update.
     */
    limit?: number
  }

  /**
   * ShortLink updateManyAndReturn
   */
  export type ShortLinkUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShortLink
     */
    select?: ShortLinkSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ShortLink
     */
    omit?: ShortLinkOmit<ExtArgs> | null
    /**
     * The data used to update ShortLinks.
     */
    data: XOR<ShortLinkUpdateManyMutationInput, ShortLinkUncheckedUpdateManyInput>
    /**
     * Filter which ShortLinks to update
     */
    where?: ShortLinkWhereInput
    /**
     * Limit how many ShortLinks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShortLinkIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ShortLink upsert
   */
  export type ShortLinkUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShortLink
     */
    select?: ShortLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShortLink
     */
    omit?: ShortLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShortLinkInclude<ExtArgs> | null
    /**
     * The filter to search for the ShortLink to update in case it exists.
     */
    where: ShortLinkWhereUniqueInput
    /**
     * In case the ShortLink found by the `where` argument doesn't exist, create a new ShortLink with this data.
     */
    create: XOR<ShortLinkCreateInput, ShortLinkUncheckedCreateInput>
    /**
     * In case the ShortLink was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ShortLinkUpdateInput, ShortLinkUncheckedUpdateInput>
  }

  /**
   * ShortLink delete
   */
  export type ShortLinkDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShortLink
     */
    select?: ShortLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShortLink
     */
    omit?: ShortLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShortLinkInclude<ExtArgs> | null
    /**
     * Filter which ShortLink to delete.
     */
    where: ShortLinkWhereUniqueInput
  }

  /**
   * ShortLink deleteMany
   */
  export type ShortLinkDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShortLinks to delete
     */
    where?: ShortLinkWhereInput
    /**
     * Limit how many ShortLinks to delete.
     */
    limit?: number
  }

  /**
   * ShortLink.user
   */
  export type ShortLink$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * ShortLink without action
   */
  export type ShortLinkDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShortLink
     */
    select?: ShortLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShortLink
     */
    omit?: ShortLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShortLinkInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    email: 'email',
    password: 'password',
    role: 'role',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const LinkScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    logo: 'logo',
    img: 'img',
    url: 'url',
    shortUrl: 'shortUrl',
    comment: 'comment',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId',
    guestId: 'guestId'
  };

  export type LinkScalarFieldEnum = (typeof LinkScalarFieldEnum)[keyof typeof LinkScalarFieldEnum]


  export const TagScalarFieldEnum: {
    id: 'id',
    value: 'value',
    label: 'label',
    userId: 'userId',
    guestId: 'guestId'
  };

  export type TagScalarFieldEnum = (typeof TagScalarFieldEnum)[keyof typeof TagScalarFieldEnum]


  export const LinkTagScalarFieldEnum: {
    id: 'id',
    linkId: 'linkId',
    tagId: 'tagId',
    userId: 'userId',
    guestId: 'guestId'
  };

  export type LinkTagScalarFieldEnum = (typeof LinkTagScalarFieldEnum)[keyof typeof LinkTagScalarFieldEnum]


  export const ShortLinkScalarFieldEnum: {
    id: 'id',
    url: 'url',
    shortUrl: 'shortUrl',
    createdAt: 'createdAt',
    userId: 'userId',
    guestId: 'guestId'
  };

  export type ShortLinkScalarFieldEnum = (typeof ShortLinkScalarFieldEnum)[keyof typeof ShortLinkScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    username?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    links?: LinkListRelationFilter
    tags?: TagListRelationFilter
    linkTags?: LinkTagListRelationFilter
    shortLinks?: ShortLinkListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    links?: LinkOrderByRelationAggregateInput
    tags?: TagOrderByRelationAggregateInput
    linkTags?: LinkTagOrderByRelationAggregateInput
    shortLinks?: ShortLinkOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    links?: LinkListRelationFilter
    tags?: TagListRelationFilter
    linkTags?: LinkTagListRelationFilter
    shortLinks?: ShortLinkListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    username?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type LinkWhereInput = {
    AND?: LinkWhereInput | LinkWhereInput[]
    OR?: LinkWhereInput[]
    NOT?: LinkWhereInput | LinkWhereInput[]
    id?: IntFilter<"Link"> | number
    title?: StringFilter<"Link"> | string
    description?: StringFilter<"Link"> | string
    logo?: StringFilter<"Link"> | string
    img?: StringFilter<"Link"> | string
    url?: StringFilter<"Link"> | string
    shortUrl?: StringFilter<"Link"> | string
    comment?: StringFilter<"Link"> | string
    createdAt?: DateTimeFilter<"Link"> | Date | string
    updatedAt?: DateTimeFilter<"Link"> | Date | string
    userId?: IntNullableFilter<"Link"> | number | null
    guestId?: StringFilter<"Link"> | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    linkTags?: LinkTagListRelationFilter
  }

  export type LinkOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    logo?: SortOrder
    img?: SortOrder
    url?: SortOrder
    shortUrl?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrderInput | SortOrder
    guestId?: SortOrder
    user?: UserOrderByWithRelationInput
    linkTags?: LinkTagOrderByRelationAggregateInput
  }

  export type LinkWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: LinkWhereInput | LinkWhereInput[]
    OR?: LinkWhereInput[]
    NOT?: LinkWhereInput | LinkWhereInput[]
    title?: StringFilter<"Link"> | string
    description?: StringFilter<"Link"> | string
    logo?: StringFilter<"Link"> | string
    img?: StringFilter<"Link"> | string
    url?: StringFilter<"Link"> | string
    shortUrl?: StringFilter<"Link"> | string
    comment?: StringFilter<"Link"> | string
    createdAt?: DateTimeFilter<"Link"> | Date | string
    updatedAt?: DateTimeFilter<"Link"> | Date | string
    userId?: IntNullableFilter<"Link"> | number | null
    guestId?: StringFilter<"Link"> | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    linkTags?: LinkTagListRelationFilter
  }, "id">

  export type LinkOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    logo?: SortOrder
    img?: SortOrder
    url?: SortOrder
    shortUrl?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrderInput | SortOrder
    guestId?: SortOrder
    _count?: LinkCountOrderByAggregateInput
    _avg?: LinkAvgOrderByAggregateInput
    _max?: LinkMaxOrderByAggregateInput
    _min?: LinkMinOrderByAggregateInput
    _sum?: LinkSumOrderByAggregateInput
  }

  export type LinkScalarWhereWithAggregatesInput = {
    AND?: LinkScalarWhereWithAggregatesInput | LinkScalarWhereWithAggregatesInput[]
    OR?: LinkScalarWhereWithAggregatesInput[]
    NOT?: LinkScalarWhereWithAggregatesInput | LinkScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Link"> | number
    title?: StringWithAggregatesFilter<"Link"> | string
    description?: StringWithAggregatesFilter<"Link"> | string
    logo?: StringWithAggregatesFilter<"Link"> | string
    img?: StringWithAggregatesFilter<"Link"> | string
    url?: StringWithAggregatesFilter<"Link"> | string
    shortUrl?: StringWithAggregatesFilter<"Link"> | string
    comment?: StringWithAggregatesFilter<"Link"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Link"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Link"> | Date | string
    userId?: IntNullableWithAggregatesFilter<"Link"> | number | null
    guestId?: StringWithAggregatesFilter<"Link"> | string
  }

  export type TagWhereInput = {
    AND?: TagWhereInput | TagWhereInput[]
    OR?: TagWhereInput[]
    NOT?: TagWhereInput | TagWhereInput[]
    id?: IntFilter<"Tag"> | number
    value?: StringFilter<"Tag"> | string
    label?: StringFilter<"Tag"> | string
    userId?: IntNullableFilter<"Tag"> | number | null
    guestId?: StringFilter<"Tag"> | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    links?: LinkTagListRelationFilter
  }

  export type TagOrderByWithRelationInput = {
    id?: SortOrder
    value?: SortOrder
    label?: SortOrder
    userId?: SortOrderInput | SortOrder
    guestId?: SortOrder
    user?: UserOrderByWithRelationInput
    links?: LinkTagOrderByRelationAggregateInput
  }

  export type TagWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TagWhereInput | TagWhereInput[]
    OR?: TagWhereInput[]
    NOT?: TagWhereInput | TagWhereInput[]
    value?: StringFilter<"Tag"> | string
    label?: StringFilter<"Tag"> | string
    userId?: IntNullableFilter<"Tag"> | number | null
    guestId?: StringFilter<"Tag"> | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    links?: LinkTagListRelationFilter
  }, "id">

  export type TagOrderByWithAggregationInput = {
    id?: SortOrder
    value?: SortOrder
    label?: SortOrder
    userId?: SortOrderInput | SortOrder
    guestId?: SortOrder
    _count?: TagCountOrderByAggregateInput
    _avg?: TagAvgOrderByAggregateInput
    _max?: TagMaxOrderByAggregateInput
    _min?: TagMinOrderByAggregateInput
    _sum?: TagSumOrderByAggregateInput
  }

  export type TagScalarWhereWithAggregatesInput = {
    AND?: TagScalarWhereWithAggregatesInput | TagScalarWhereWithAggregatesInput[]
    OR?: TagScalarWhereWithAggregatesInput[]
    NOT?: TagScalarWhereWithAggregatesInput | TagScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Tag"> | number
    value?: StringWithAggregatesFilter<"Tag"> | string
    label?: StringWithAggregatesFilter<"Tag"> | string
    userId?: IntNullableWithAggregatesFilter<"Tag"> | number | null
    guestId?: StringWithAggregatesFilter<"Tag"> | string
  }

  export type LinkTagWhereInput = {
    AND?: LinkTagWhereInput | LinkTagWhereInput[]
    OR?: LinkTagWhereInput[]
    NOT?: LinkTagWhereInput | LinkTagWhereInput[]
    id?: IntFilter<"LinkTag"> | number
    linkId?: IntFilter<"LinkTag"> | number
    tagId?: IntFilter<"LinkTag"> | number
    userId?: IntNullableFilter<"LinkTag"> | number | null
    guestId?: StringFilter<"LinkTag"> | string
    link?: XOR<LinkScalarRelationFilter, LinkWhereInput>
    tag?: XOR<TagScalarRelationFilter, TagWhereInput>
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type LinkTagOrderByWithRelationInput = {
    id?: SortOrder
    linkId?: SortOrder
    tagId?: SortOrder
    userId?: SortOrderInput | SortOrder
    guestId?: SortOrder
    link?: LinkOrderByWithRelationInput
    tag?: TagOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type LinkTagWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: LinkTagWhereInput | LinkTagWhereInput[]
    OR?: LinkTagWhereInput[]
    NOT?: LinkTagWhereInput | LinkTagWhereInput[]
    linkId?: IntFilter<"LinkTag"> | number
    tagId?: IntFilter<"LinkTag"> | number
    userId?: IntNullableFilter<"LinkTag"> | number | null
    guestId?: StringFilter<"LinkTag"> | string
    link?: XOR<LinkScalarRelationFilter, LinkWhereInput>
    tag?: XOR<TagScalarRelationFilter, TagWhereInput>
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type LinkTagOrderByWithAggregationInput = {
    id?: SortOrder
    linkId?: SortOrder
    tagId?: SortOrder
    userId?: SortOrderInput | SortOrder
    guestId?: SortOrder
    _count?: LinkTagCountOrderByAggregateInput
    _avg?: LinkTagAvgOrderByAggregateInput
    _max?: LinkTagMaxOrderByAggregateInput
    _min?: LinkTagMinOrderByAggregateInput
    _sum?: LinkTagSumOrderByAggregateInput
  }

  export type LinkTagScalarWhereWithAggregatesInput = {
    AND?: LinkTagScalarWhereWithAggregatesInput | LinkTagScalarWhereWithAggregatesInput[]
    OR?: LinkTagScalarWhereWithAggregatesInput[]
    NOT?: LinkTagScalarWhereWithAggregatesInput | LinkTagScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"LinkTag"> | number
    linkId?: IntWithAggregatesFilter<"LinkTag"> | number
    tagId?: IntWithAggregatesFilter<"LinkTag"> | number
    userId?: IntNullableWithAggregatesFilter<"LinkTag"> | number | null
    guestId?: StringWithAggregatesFilter<"LinkTag"> | string
  }

  export type ShortLinkWhereInput = {
    AND?: ShortLinkWhereInput | ShortLinkWhereInput[]
    OR?: ShortLinkWhereInput[]
    NOT?: ShortLinkWhereInput | ShortLinkWhereInput[]
    id?: IntFilter<"ShortLink"> | number
    url?: StringFilter<"ShortLink"> | string
    shortUrl?: StringFilter<"ShortLink"> | string
    createdAt?: DateTimeFilter<"ShortLink"> | Date | string
    userId?: IntNullableFilter<"ShortLink"> | number | null
    guestId?: StringFilter<"ShortLink"> | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type ShortLinkOrderByWithRelationInput = {
    id?: SortOrder
    url?: SortOrder
    shortUrl?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrderInput | SortOrder
    guestId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type ShortLinkWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    shortUrl?: string
    AND?: ShortLinkWhereInput | ShortLinkWhereInput[]
    OR?: ShortLinkWhereInput[]
    NOT?: ShortLinkWhereInput | ShortLinkWhereInput[]
    url?: StringFilter<"ShortLink"> | string
    createdAt?: DateTimeFilter<"ShortLink"> | Date | string
    userId?: IntNullableFilter<"ShortLink"> | number | null
    guestId?: StringFilter<"ShortLink"> | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id" | "shortUrl">

  export type ShortLinkOrderByWithAggregationInput = {
    id?: SortOrder
    url?: SortOrder
    shortUrl?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrderInput | SortOrder
    guestId?: SortOrder
    _count?: ShortLinkCountOrderByAggregateInput
    _avg?: ShortLinkAvgOrderByAggregateInput
    _max?: ShortLinkMaxOrderByAggregateInput
    _min?: ShortLinkMinOrderByAggregateInput
    _sum?: ShortLinkSumOrderByAggregateInput
  }

  export type ShortLinkScalarWhereWithAggregatesInput = {
    AND?: ShortLinkScalarWhereWithAggregatesInput | ShortLinkScalarWhereWithAggregatesInput[]
    OR?: ShortLinkScalarWhereWithAggregatesInput[]
    NOT?: ShortLinkScalarWhereWithAggregatesInput | ShortLinkScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ShortLink"> | number
    url?: StringWithAggregatesFilter<"ShortLink"> | string
    shortUrl?: StringWithAggregatesFilter<"ShortLink"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ShortLink"> | Date | string
    userId?: IntNullableWithAggregatesFilter<"ShortLink"> | number | null
    guestId?: StringWithAggregatesFilter<"ShortLink"> | string
  }

  export type UserCreateInput = {
    username: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    links?: LinkCreateNestedManyWithoutUserInput
    tags?: TagCreateNestedManyWithoutUserInput
    linkTags?: LinkTagCreateNestedManyWithoutUserInput
    shortLinks?: ShortLinkCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    username: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    links?: LinkUncheckedCreateNestedManyWithoutUserInput
    tags?: TagUncheckedCreateNestedManyWithoutUserInput
    linkTags?: LinkTagUncheckedCreateNestedManyWithoutUserInput
    shortLinks?: ShortLinkUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    links?: LinkUpdateManyWithoutUserNestedInput
    tags?: TagUpdateManyWithoutUserNestedInput
    linkTags?: LinkTagUpdateManyWithoutUserNestedInput
    shortLinks?: ShortLinkUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    links?: LinkUncheckedUpdateManyWithoutUserNestedInput
    tags?: TagUncheckedUpdateManyWithoutUserNestedInput
    linkTags?: LinkTagUncheckedUpdateManyWithoutUserNestedInput
    shortLinks?: ShortLinkUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    username: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LinkCreateInput = {
    title: string
    description: string
    logo: string
    img: string
    url: string
    shortUrl: string
    comment: string
    createdAt?: Date | string
    updatedAt?: Date | string
    guestId: string
    user?: UserCreateNestedOneWithoutLinksInput
    linkTags?: LinkTagCreateNestedManyWithoutLinkInput
  }

  export type LinkUncheckedCreateInput = {
    id?: number
    title: string
    description: string
    logo: string
    img: string
    url: string
    shortUrl: string
    comment: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId?: number | null
    guestId: string
    linkTags?: LinkTagUncheckedCreateNestedManyWithoutLinkInput
  }

  export type LinkUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    img?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    shortUrl?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    guestId?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneWithoutLinksNestedInput
    linkTags?: LinkTagUpdateManyWithoutLinkNestedInput
  }

  export type LinkUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    img?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    shortUrl?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    guestId?: StringFieldUpdateOperationsInput | string
    linkTags?: LinkTagUncheckedUpdateManyWithoutLinkNestedInput
  }

  export type LinkCreateManyInput = {
    id?: number
    title: string
    description: string
    logo: string
    img: string
    url: string
    shortUrl: string
    comment: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId?: number | null
    guestId: string
  }

  export type LinkUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    img?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    shortUrl?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    guestId?: StringFieldUpdateOperationsInput | string
  }

  export type LinkUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    img?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    shortUrl?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    guestId?: StringFieldUpdateOperationsInput | string
  }

  export type TagCreateInput = {
    value: string
    label: string
    guestId: string
    user?: UserCreateNestedOneWithoutTagsInput
    links?: LinkTagCreateNestedManyWithoutTagInput
  }

  export type TagUncheckedCreateInput = {
    id?: number
    value: string
    label: string
    userId?: number | null
    guestId: string
    links?: LinkTagUncheckedCreateNestedManyWithoutTagInput
  }

  export type TagUpdateInput = {
    value?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    guestId?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneWithoutTagsNestedInput
    links?: LinkTagUpdateManyWithoutTagNestedInput
  }

  export type TagUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    value?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    guestId?: StringFieldUpdateOperationsInput | string
    links?: LinkTagUncheckedUpdateManyWithoutTagNestedInput
  }

  export type TagCreateManyInput = {
    id?: number
    value: string
    label: string
    userId?: number | null
    guestId: string
  }

  export type TagUpdateManyMutationInput = {
    value?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    guestId?: StringFieldUpdateOperationsInput | string
  }

  export type TagUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    value?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    guestId?: StringFieldUpdateOperationsInput | string
  }

  export type LinkTagCreateInput = {
    guestId: string
    link: LinkCreateNestedOneWithoutLinkTagsInput
    tag: TagCreateNestedOneWithoutLinksInput
    user?: UserCreateNestedOneWithoutLinkTagsInput
  }

  export type LinkTagUncheckedCreateInput = {
    id?: number
    linkId: number
    tagId: number
    userId?: number | null
    guestId: string
  }

  export type LinkTagUpdateInput = {
    guestId?: StringFieldUpdateOperationsInput | string
    link?: LinkUpdateOneRequiredWithoutLinkTagsNestedInput
    tag?: TagUpdateOneRequiredWithoutLinksNestedInput
    user?: UserUpdateOneWithoutLinkTagsNestedInput
  }

  export type LinkTagUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    linkId?: IntFieldUpdateOperationsInput | number
    tagId?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    guestId?: StringFieldUpdateOperationsInput | string
  }

  export type LinkTagCreateManyInput = {
    id?: number
    linkId: number
    tagId: number
    userId?: number | null
    guestId: string
  }

  export type LinkTagUpdateManyMutationInput = {
    guestId?: StringFieldUpdateOperationsInput | string
  }

  export type LinkTagUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    linkId?: IntFieldUpdateOperationsInput | number
    tagId?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    guestId?: StringFieldUpdateOperationsInput | string
  }

  export type ShortLinkCreateInput = {
    url: string
    shortUrl: string
    createdAt?: Date | string
    guestId: string
    user?: UserCreateNestedOneWithoutShortLinksInput
  }

  export type ShortLinkUncheckedCreateInput = {
    id?: number
    url: string
    shortUrl: string
    createdAt?: Date | string
    userId?: number | null
    guestId: string
  }

  export type ShortLinkUpdateInput = {
    url?: StringFieldUpdateOperationsInput | string
    shortUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    guestId?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneWithoutShortLinksNestedInput
  }

  export type ShortLinkUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    shortUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    guestId?: StringFieldUpdateOperationsInput | string
  }

  export type ShortLinkCreateManyInput = {
    id?: number
    url: string
    shortUrl: string
    createdAt?: Date | string
    userId?: number | null
    guestId: string
  }

  export type ShortLinkUpdateManyMutationInput = {
    url?: StringFieldUpdateOperationsInput | string
    shortUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    guestId?: StringFieldUpdateOperationsInput | string
  }

  export type ShortLinkUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    shortUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    guestId?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type LinkListRelationFilter = {
    every?: LinkWhereInput
    some?: LinkWhereInput
    none?: LinkWhereInput
  }

  export type TagListRelationFilter = {
    every?: TagWhereInput
    some?: TagWhereInput
    none?: TagWhereInput
  }

  export type LinkTagListRelationFilter = {
    every?: LinkTagWhereInput
    some?: LinkTagWhereInput
    none?: LinkTagWhereInput
  }

  export type ShortLinkListRelationFilter = {
    every?: ShortLinkWhereInput
    some?: ShortLinkWhereInput
    none?: ShortLinkWhereInput
  }

  export type LinkOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TagOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LinkTagOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ShortLinkOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type LinkCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    logo?: SortOrder
    img?: SortOrder
    url?: SortOrder
    shortUrl?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    guestId?: SortOrder
  }

  export type LinkAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type LinkMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    logo?: SortOrder
    img?: SortOrder
    url?: SortOrder
    shortUrl?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    guestId?: SortOrder
  }

  export type LinkMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    logo?: SortOrder
    img?: SortOrder
    url?: SortOrder
    shortUrl?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    guestId?: SortOrder
  }

  export type LinkSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type TagCountOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
    label?: SortOrder
    userId?: SortOrder
    guestId?: SortOrder
  }

  export type TagAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type TagMaxOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
    label?: SortOrder
    userId?: SortOrder
    guestId?: SortOrder
  }

  export type TagMinOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
    label?: SortOrder
    userId?: SortOrder
    guestId?: SortOrder
  }

  export type TagSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type LinkScalarRelationFilter = {
    is?: LinkWhereInput
    isNot?: LinkWhereInput
  }

  export type TagScalarRelationFilter = {
    is?: TagWhereInput
    isNot?: TagWhereInput
  }

  export type LinkTagCountOrderByAggregateInput = {
    id?: SortOrder
    linkId?: SortOrder
    tagId?: SortOrder
    userId?: SortOrder
    guestId?: SortOrder
  }

  export type LinkTagAvgOrderByAggregateInput = {
    id?: SortOrder
    linkId?: SortOrder
    tagId?: SortOrder
    userId?: SortOrder
  }

  export type LinkTagMaxOrderByAggregateInput = {
    id?: SortOrder
    linkId?: SortOrder
    tagId?: SortOrder
    userId?: SortOrder
    guestId?: SortOrder
  }

  export type LinkTagMinOrderByAggregateInput = {
    id?: SortOrder
    linkId?: SortOrder
    tagId?: SortOrder
    userId?: SortOrder
    guestId?: SortOrder
  }

  export type LinkTagSumOrderByAggregateInput = {
    id?: SortOrder
    linkId?: SortOrder
    tagId?: SortOrder
    userId?: SortOrder
  }

  export type ShortLinkCountOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    shortUrl?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    guestId?: SortOrder
  }

  export type ShortLinkAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type ShortLinkMaxOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    shortUrl?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    guestId?: SortOrder
  }

  export type ShortLinkMinOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    shortUrl?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    guestId?: SortOrder
  }

  export type ShortLinkSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type LinkCreateNestedManyWithoutUserInput = {
    create?: XOR<LinkCreateWithoutUserInput, LinkUncheckedCreateWithoutUserInput> | LinkCreateWithoutUserInput[] | LinkUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LinkCreateOrConnectWithoutUserInput | LinkCreateOrConnectWithoutUserInput[]
    createMany?: LinkCreateManyUserInputEnvelope
    connect?: LinkWhereUniqueInput | LinkWhereUniqueInput[]
  }

  export type TagCreateNestedManyWithoutUserInput = {
    create?: XOR<TagCreateWithoutUserInput, TagUncheckedCreateWithoutUserInput> | TagCreateWithoutUserInput[] | TagUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TagCreateOrConnectWithoutUserInput | TagCreateOrConnectWithoutUserInput[]
    createMany?: TagCreateManyUserInputEnvelope
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
  }

  export type LinkTagCreateNestedManyWithoutUserInput = {
    create?: XOR<LinkTagCreateWithoutUserInput, LinkTagUncheckedCreateWithoutUserInput> | LinkTagCreateWithoutUserInput[] | LinkTagUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LinkTagCreateOrConnectWithoutUserInput | LinkTagCreateOrConnectWithoutUserInput[]
    createMany?: LinkTagCreateManyUserInputEnvelope
    connect?: LinkTagWhereUniqueInput | LinkTagWhereUniqueInput[]
  }

  export type ShortLinkCreateNestedManyWithoutUserInput = {
    create?: XOR<ShortLinkCreateWithoutUserInput, ShortLinkUncheckedCreateWithoutUserInput> | ShortLinkCreateWithoutUserInput[] | ShortLinkUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ShortLinkCreateOrConnectWithoutUserInput | ShortLinkCreateOrConnectWithoutUserInput[]
    createMany?: ShortLinkCreateManyUserInputEnvelope
    connect?: ShortLinkWhereUniqueInput | ShortLinkWhereUniqueInput[]
  }

  export type LinkUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<LinkCreateWithoutUserInput, LinkUncheckedCreateWithoutUserInput> | LinkCreateWithoutUserInput[] | LinkUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LinkCreateOrConnectWithoutUserInput | LinkCreateOrConnectWithoutUserInput[]
    createMany?: LinkCreateManyUserInputEnvelope
    connect?: LinkWhereUniqueInput | LinkWhereUniqueInput[]
  }

  export type TagUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TagCreateWithoutUserInput, TagUncheckedCreateWithoutUserInput> | TagCreateWithoutUserInput[] | TagUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TagCreateOrConnectWithoutUserInput | TagCreateOrConnectWithoutUserInput[]
    createMany?: TagCreateManyUserInputEnvelope
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
  }

  export type LinkTagUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<LinkTagCreateWithoutUserInput, LinkTagUncheckedCreateWithoutUserInput> | LinkTagCreateWithoutUserInput[] | LinkTagUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LinkTagCreateOrConnectWithoutUserInput | LinkTagCreateOrConnectWithoutUserInput[]
    createMany?: LinkTagCreateManyUserInputEnvelope
    connect?: LinkTagWhereUniqueInput | LinkTagWhereUniqueInput[]
  }

  export type ShortLinkUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ShortLinkCreateWithoutUserInput, ShortLinkUncheckedCreateWithoutUserInput> | ShortLinkCreateWithoutUserInput[] | ShortLinkUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ShortLinkCreateOrConnectWithoutUserInput | ShortLinkCreateOrConnectWithoutUserInput[]
    createMany?: ShortLinkCreateManyUserInputEnvelope
    connect?: ShortLinkWhereUniqueInput | ShortLinkWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type LinkUpdateManyWithoutUserNestedInput = {
    create?: XOR<LinkCreateWithoutUserInput, LinkUncheckedCreateWithoutUserInput> | LinkCreateWithoutUserInput[] | LinkUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LinkCreateOrConnectWithoutUserInput | LinkCreateOrConnectWithoutUserInput[]
    upsert?: LinkUpsertWithWhereUniqueWithoutUserInput | LinkUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LinkCreateManyUserInputEnvelope
    set?: LinkWhereUniqueInput | LinkWhereUniqueInput[]
    disconnect?: LinkWhereUniqueInput | LinkWhereUniqueInput[]
    delete?: LinkWhereUniqueInput | LinkWhereUniqueInput[]
    connect?: LinkWhereUniqueInput | LinkWhereUniqueInput[]
    update?: LinkUpdateWithWhereUniqueWithoutUserInput | LinkUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LinkUpdateManyWithWhereWithoutUserInput | LinkUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LinkScalarWhereInput | LinkScalarWhereInput[]
  }

  export type TagUpdateManyWithoutUserNestedInput = {
    create?: XOR<TagCreateWithoutUserInput, TagUncheckedCreateWithoutUserInput> | TagCreateWithoutUserInput[] | TagUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TagCreateOrConnectWithoutUserInput | TagCreateOrConnectWithoutUserInput[]
    upsert?: TagUpsertWithWhereUniqueWithoutUserInput | TagUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TagCreateManyUserInputEnvelope
    set?: TagWhereUniqueInput | TagWhereUniqueInput[]
    disconnect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    delete?: TagWhereUniqueInput | TagWhereUniqueInput[]
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    update?: TagUpdateWithWhereUniqueWithoutUserInput | TagUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TagUpdateManyWithWhereWithoutUserInput | TagUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TagScalarWhereInput | TagScalarWhereInput[]
  }

  export type LinkTagUpdateManyWithoutUserNestedInput = {
    create?: XOR<LinkTagCreateWithoutUserInput, LinkTagUncheckedCreateWithoutUserInput> | LinkTagCreateWithoutUserInput[] | LinkTagUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LinkTagCreateOrConnectWithoutUserInput | LinkTagCreateOrConnectWithoutUserInput[]
    upsert?: LinkTagUpsertWithWhereUniqueWithoutUserInput | LinkTagUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LinkTagCreateManyUserInputEnvelope
    set?: LinkTagWhereUniqueInput | LinkTagWhereUniqueInput[]
    disconnect?: LinkTagWhereUniqueInput | LinkTagWhereUniqueInput[]
    delete?: LinkTagWhereUniqueInput | LinkTagWhereUniqueInput[]
    connect?: LinkTagWhereUniqueInput | LinkTagWhereUniqueInput[]
    update?: LinkTagUpdateWithWhereUniqueWithoutUserInput | LinkTagUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LinkTagUpdateManyWithWhereWithoutUserInput | LinkTagUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LinkTagScalarWhereInput | LinkTagScalarWhereInput[]
  }

  export type ShortLinkUpdateManyWithoutUserNestedInput = {
    create?: XOR<ShortLinkCreateWithoutUserInput, ShortLinkUncheckedCreateWithoutUserInput> | ShortLinkCreateWithoutUserInput[] | ShortLinkUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ShortLinkCreateOrConnectWithoutUserInput | ShortLinkCreateOrConnectWithoutUserInput[]
    upsert?: ShortLinkUpsertWithWhereUniqueWithoutUserInput | ShortLinkUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ShortLinkCreateManyUserInputEnvelope
    set?: ShortLinkWhereUniqueInput | ShortLinkWhereUniqueInput[]
    disconnect?: ShortLinkWhereUniqueInput | ShortLinkWhereUniqueInput[]
    delete?: ShortLinkWhereUniqueInput | ShortLinkWhereUniqueInput[]
    connect?: ShortLinkWhereUniqueInput | ShortLinkWhereUniqueInput[]
    update?: ShortLinkUpdateWithWhereUniqueWithoutUserInput | ShortLinkUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ShortLinkUpdateManyWithWhereWithoutUserInput | ShortLinkUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ShortLinkScalarWhereInput | ShortLinkScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type LinkUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<LinkCreateWithoutUserInput, LinkUncheckedCreateWithoutUserInput> | LinkCreateWithoutUserInput[] | LinkUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LinkCreateOrConnectWithoutUserInput | LinkCreateOrConnectWithoutUserInput[]
    upsert?: LinkUpsertWithWhereUniqueWithoutUserInput | LinkUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LinkCreateManyUserInputEnvelope
    set?: LinkWhereUniqueInput | LinkWhereUniqueInput[]
    disconnect?: LinkWhereUniqueInput | LinkWhereUniqueInput[]
    delete?: LinkWhereUniqueInput | LinkWhereUniqueInput[]
    connect?: LinkWhereUniqueInput | LinkWhereUniqueInput[]
    update?: LinkUpdateWithWhereUniqueWithoutUserInput | LinkUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LinkUpdateManyWithWhereWithoutUserInput | LinkUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LinkScalarWhereInput | LinkScalarWhereInput[]
  }

  export type TagUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TagCreateWithoutUserInput, TagUncheckedCreateWithoutUserInput> | TagCreateWithoutUserInput[] | TagUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TagCreateOrConnectWithoutUserInput | TagCreateOrConnectWithoutUserInput[]
    upsert?: TagUpsertWithWhereUniqueWithoutUserInput | TagUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TagCreateManyUserInputEnvelope
    set?: TagWhereUniqueInput | TagWhereUniqueInput[]
    disconnect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    delete?: TagWhereUniqueInput | TagWhereUniqueInput[]
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    update?: TagUpdateWithWhereUniqueWithoutUserInput | TagUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TagUpdateManyWithWhereWithoutUserInput | TagUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TagScalarWhereInput | TagScalarWhereInput[]
  }

  export type LinkTagUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<LinkTagCreateWithoutUserInput, LinkTagUncheckedCreateWithoutUserInput> | LinkTagCreateWithoutUserInput[] | LinkTagUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LinkTagCreateOrConnectWithoutUserInput | LinkTagCreateOrConnectWithoutUserInput[]
    upsert?: LinkTagUpsertWithWhereUniqueWithoutUserInput | LinkTagUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LinkTagCreateManyUserInputEnvelope
    set?: LinkTagWhereUniqueInput | LinkTagWhereUniqueInput[]
    disconnect?: LinkTagWhereUniqueInput | LinkTagWhereUniqueInput[]
    delete?: LinkTagWhereUniqueInput | LinkTagWhereUniqueInput[]
    connect?: LinkTagWhereUniqueInput | LinkTagWhereUniqueInput[]
    update?: LinkTagUpdateWithWhereUniqueWithoutUserInput | LinkTagUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LinkTagUpdateManyWithWhereWithoutUserInput | LinkTagUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LinkTagScalarWhereInput | LinkTagScalarWhereInput[]
  }

  export type ShortLinkUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ShortLinkCreateWithoutUserInput, ShortLinkUncheckedCreateWithoutUserInput> | ShortLinkCreateWithoutUserInput[] | ShortLinkUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ShortLinkCreateOrConnectWithoutUserInput | ShortLinkCreateOrConnectWithoutUserInput[]
    upsert?: ShortLinkUpsertWithWhereUniqueWithoutUserInput | ShortLinkUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ShortLinkCreateManyUserInputEnvelope
    set?: ShortLinkWhereUniqueInput | ShortLinkWhereUniqueInput[]
    disconnect?: ShortLinkWhereUniqueInput | ShortLinkWhereUniqueInput[]
    delete?: ShortLinkWhereUniqueInput | ShortLinkWhereUniqueInput[]
    connect?: ShortLinkWhereUniqueInput | ShortLinkWhereUniqueInput[]
    update?: ShortLinkUpdateWithWhereUniqueWithoutUserInput | ShortLinkUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ShortLinkUpdateManyWithWhereWithoutUserInput | ShortLinkUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ShortLinkScalarWhereInput | ShortLinkScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutLinksInput = {
    create?: XOR<UserCreateWithoutLinksInput, UserUncheckedCreateWithoutLinksInput>
    connectOrCreate?: UserCreateOrConnectWithoutLinksInput
    connect?: UserWhereUniqueInput
  }

  export type LinkTagCreateNestedManyWithoutLinkInput = {
    create?: XOR<LinkTagCreateWithoutLinkInput, LinkTagUncheckedCreateWithoutLinkInput> | LinkTagCreateWithoutLinkInput[] | LinkTagUncheckedCreateWithoutLinkInput[]
    connectOrCreate?: LinkTagCreateOrConnectWithoutLinkInput | LinkTagCreateOrConnectWithoutLinkInput[]
    createMany?: LinkTagCreateManyLinkInputEnvelope
    connect?: LinkTagWhereUniqueInput | LinkTagWhereUniqueInput[]
  }

  export type LinkTagUncheckedCreateNestedManyWithoutLinkInput = {
    create?: XOR<LinkTagCreateWithoutLinkInput, LinkTagUncheckedCreateWithoutLinkInput> | LinkTagCreateWithoutLinkInput[] | LinkTagUncheckedCreateWithoutLinkInput[]
    connectOrCreate?: LinkTagCreateOrConnectWithoutLinkInput | LinkTagCreateOrConnectWithoutLinkInput[]
    createMany?: LinkTagCreateManyLinkInputEnvelope
    connect?: LinkTagWhereUniqueInput | LinkTagWhereUniqueInput[]
  }

  export type UserUpdateOneWithoutLinksNestedInput = {
    create?: XOR<UserCreateWithoutLinksInput, UserUncheckedCreateWithoutLinksInput>
    connectOrCreate?: UserCreateOrConnectWithoutLinksInput
    upsert?: UserUpsertWithoutLinksInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLinksInput, UserUpdateWithoutLinksInput>, UserUncheckedUpdateWithoutLinksInput>
  }

  export type LinkTagUpdateManyWithoutLinkNestedInput = {
    create?: XOR<LinkTagCreateWithoutLinkInput, LinkTagUncheckedCreateWithoutLinkInput> | LinkTagCreateWithoutLinkInput[] | LinkTagUncheckedCreateWithoutLinkInput[]
    connectOrCreate?: LinkTagCreateOrConnectWithoutLinkInput | LinkTagCreateOrConnectWithoutLinkInput[]
    upsert?: LinkTagUpsertWithWhereUniqueWithoutLinkInput | LinkTagUpsertWithWhereUniqueWithoutLinkInput[]
    createMany?: LinkTagCreateManyLinkInputEnvelope
    set?: LinkTagWhereUniqueInput | LinkTagWhereUniqueInput[]
    disconnect?: LinkTagWhereUniqueInput | LinkTagWhereUniqueInput[]
    delete?: LinkTagWhereUniqueInput | LinkTagWhereUniqueInput[]
    connect?: LinkTagWhereUniqueInput | LinkTagWhereUniqueInput[]
    update?: LinkTagUpdateWithWhereUniqueWithoutLinkInput | LinkTagUpdateWithWhereUniqueWithoutLinkInput[]
    updateMany?: LinkTagUpdateManyWithWhereWithoutLinkInput | LinkTagUpdateManyWithWhereWithoutLinkInput[]
    deleteMany?: LinkTagScalarWhereInput | LinkTagScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type LinkTagUncheckedUpdateManyWithoutLinkNestedInput = {
    create?: XOR<LinkTagCreateWithoutLinkInput, LinkTagUncheckedCreateWithoutLinkInput> | LinkTagCreateWithoutLinkInput[] | LinkTagUncheckedCreateWithoutLinkInput[]
    connectOrCreate?: LinkTagCreateOrConnectWithoutLinkInput | LinkTagCreateOrConnectWithoutLinkInput[]
    upsert?: LinkTagUpsertWithWhereUniqueWithoutLinkInput | LinkTagUpsertWithWhereUniqueWithoutLinkInput[]
    createMany?: LinkTagCreateManyLinkInputEnvelope
    set?: LinkTagWhereUniqueInput | LinkTagWhereUniqueInput[]
    disconnect?: LinkTagWhereUniqueInput | LinkTagWhereUniqueInput[]
    delete?: LinkTagWhereUniqueInput | LinkTagWhereUniqueInput[]
    connect?: LinkTagWhereUniqueInput | LinkTagWhereUniqueInput[]
    update?: LinkTagUpdateWithWhereUniqueWithoutLinkInput | LinkTagUpdateWithWhereUniqueWithoutLinkInput[]
    updateMany?: LinkTagUpdateManyWithWhereWithoutLinkInput | LinkTagUpdateManyWithWhereWithoutLinkInput[]
    deleteMany?: LinkTagScalarWhereInput | LinkTagScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutTagsInput = {
    create?: XOR<UserCreateWithoutTagsInput, UserUncheckedCreateWithoutTagsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTagsInput
    connect?: UserWhereUniqueInput
  }

  export type LinkTagCreateNestedManyWithoutTagInput = {
    create?: XOR<LinkTagCreateWithoutTagInput, LinkTagUncheckedCreateWithoutTagInput> | LinkTagCreateWithoutTagInput[] | LinkTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: LinkTagCreateOrConnectWithoutTagInput | LinkTagCreateOrConnectWithoutTagInput[]
    createMany?: LinkTagCreateManyTagInputEnvelope
    connect?: LinkTagWhereUniqueInput | LinkTagWhereUniqueInput[]
  }

  export type LinkTagUncheckedCreateNestedManyWithoutTagInput = {
    create?: XOR<LinkTagCreateWithoutTagInput, LinkTagUncheckedCreateWithoutTagInput> | LinkTagCreateWithoutTagInput[] | LinkTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: LinkTagCreateOrConnectWithoutTagInput | LinkTagCreateOrConnectWithoutTagInput[]
    createMany?: LinkTagCreateManyTagInputEnvelope
    connect?: LinkTagWhereUniqueInput | LinkTagWhereUniqueInput[]
  }

  export type UserUpdateOneWithoutTagsNestedInput = {
    create?: XOR<UserCreateWithoutTagsInput, UserUncheckedCreateWithoutTagsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTagsInput
    upsert?: UserUpsertWithoutTagsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTagsInput, UserUpdateWithoutTagsInput>, UserUncheckedUpdateWithoutTagsInput>
  }

  export type LinkTagUpdateManyWithoutTagNestedInput = {
    create?: XOR<LinkTagCreateWithoutTagInput, LinkTagUncheckedCreateWithoutTagInput> | LinkTagCreateWithoutTagInput[] | LinkTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: LinkTagCreateOrConnectWithoutTagInput | LinkTagCreateOrConnectWithoutTagInput[]
    upsert?: LinkTagUpsertWithWhereUniqueWithoutTagInput | LinkTagUpsertWithWhereUniqueWithoutTagInput[]
    createMany?: LinkTagCreateManyTagInputEnvelope
    set?: LinkTagWhereUniqueInput | LinkTagWhereUniqueInput[]
    disconnect?: LinkTagWhereUniqueInput | LinkTagWhereUniqueInput[]
    delete?: LinkTagWhereUniqueInput | LinkTagWhereUniqueInput[]
    connect?: LinkTagWhereUniqueInput | LinkTagWhereUniqueInput[]
    update?: LinkTagUpdateWithWhereUniqueWithoutTagInput | LinkTagUpdateWithWhereUniqueWithoutTagInput[]
    updateMany?: LinkTagUpdateManyWithWhereWithoutTagInput | LinkTagUpdateManyWithWhereWithoutTagInput[]
    deleteMany?: LinkTagScalarWhereInput | LinkTagScalarWhereInput[]
  }

  export type LinkTagUncheckedUpdateManyWithoutTagNestedInput = {
    create?: XOR<LinkTagCreateWithoutTagInput, LinkTagUncheckedCreateWithoutTagInput> | LinkTagCreateWithoutTagInput[] | LinkTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: LinkTagCreateOrConnectWithoutTagInput | LinkTagCreateOrConnectWithoutTagInput[]
    upsert?: LinkTagUpsertWithWhereUniqueWithoutTagInput | LinkTagUpsertWithWhereUniqueWithoutTagInput[]
    createMany?: LinkTagCreateManyTagInputEnvelope
    set?: LinkTagWhereUniqueInput | LinkTagWhereUniqueInput[]
    disconnect?: LinkTagWhereUniqueInput | LinkTagWhereUniqueInput[]
    delete?: LinkTagWhereUniqueInput | LinkTagWhereUniqueInput[]
    connect?: LinkTagWhereUniqueInput | LinkTagWhereUniqueInput[]
    update?: LinkTagUpdateWithWhereUniqueWithoutTagInput | LinkTagUpdateWithWhereUniqueWithoutTagInput[]
    updateMany?: LinkTagUpdateManyWithWhereWithoutTagInput | LinkTagUpdateManyWithWhereWithoutTagInput[]
    deleteMany?: LinkTagScalarWhereInput | LinkTagScalarWhereInput[]
  }

  export type LinkCreateNestedOneWithoutLinkTagsInput = {
    create?: XOR<LinkCreateWithoutLinkTagsInput, LinkUncheckedCreateWithoutLinkTagsInput>
    connectOrCreate?: LinkCreateOrConnectWithoutLinkTagsInput
    connect?: LinkWhereUniqueInput
  }

  export type TagCreateNestedOneWithoutLinksInput = {
    create?: XOR<TagCreateWithoutLinksInput, TagUncheckedCreateWithoutLinksInput>
    connectOrCreate?: TagCreateOrConnectWithoutLinksInput
    connect?: TagWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutLinkTagsInput = {
    create?: XOR<UserCreateWithoutLinkTagsInput, UserUncheckedCreateWithoutLinkTagsInput>
    connectOrCreate?: UserCreateOrConnectWithoutLinkTagsInput
    connect?: UserWhereUniqueInput
  }

  export type LinkUpdateOneRequiredWithoutLinkTagsNestedInput = {
    create?: XOR<LinkCreateWithoutLinkTagsInput, LinkUncheckedCreateWithoutLinkTagsInput>
    connectOrCreate?: LinkCreateOrConnectWithoutLinkTagsInput
    upsert?: LinkUpsertWithoutLinkTagsInput
    connect?: LinkWhereUniqueInput
    update?: XOR<XOR<LinkUpdateToOneWithWhereWithoutLinkTagsInput, LinkUpdateWithoutLinkTagsInput>, LinkUncheckedUpdateWithoutLinkTagsInput>
  }

  export type TagUpdateOneRequiredWithoutLinksNestedInput = {
    create?: XOR<TagCreateWithoutLinksInput, TagUncheckedCreateWithoutLinksInput>
    connectOrCreate?: TagCreateOrConnectWithoutLinksInput
    upsert?: TagUpsertWithoutLinksInput
    connect?: TagWhereUniqueInput
    update?: XOR<XOR<TagUpdateToOneWithWhereWithoutLinksInput, TagUpdateWithoutLinksInput>, TagUncheckedUpdateWithoutLinksInput>
  }

  export type UserUpdateOneWithoutLinkTagsNestedInput = {
    create?: XOR<UserCreateWithoutLinkTagsInput, UserUncheckedCreateWithoutLinkTagsInput>
    connectOrCreate?: UserCreateOrConnectWithoutLinkTagsInput
    upsert?: UserUpsertWithoutLinkTagsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLinkTagsInput, UserUpdateWithoutLinkTagsInput>, UserUncheckedUpdateWithoutLinkTagsInput>
  }

  export type UserCreateNestedOneWithoutShortLinksInput = {
    create?: XOR<UserCreateWithoutShortLinksInput, UserUncheckedCreateWithoutShortLinksInput>
    connectOrCreate?: UserCreateOrConnectWithoutShortLinksInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneWithoutShortLinksNestedInput = {
    create?: XOR<UserCreateWithoutShortLinksInput, UserUncheckedCreateWithoutShortLinksInput>
    connectOrCreate?: UserCreateOrConnectWithoutShortLinksInput
    upsert?: UserUpsertWithoutShortLinksInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutShortLinksInput, UserUpdateWithoutShortLinksInput>, UserUncheckedUpdateWithoutShortLinksInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type LinkCreateWithoutUserInput = {
    title: string
    description: string
    logo: string
    img: string
    url: string
    shortUrl: string
    comment: string
    createdAt?: Date | string
    updatedAt?: Date | string
    guestId: string
    linkTags?: LinkTagCreateNestedManyWithoutLinkInput
  }

  export type LinkUncheckedCreateWithoutUserInput = {
    id?: number
    title: string
    description: string
    logo: string
    img: string
    url: string
    shortUrl: string
    comment: string
    createdAt?: Date | string
    updatedAt?: Date | string
    guestId: string
    linkTags?: LinkTagUncheckedCreateNestedManyWithoutLinkInput
  }

  export type LinkCreateOrConnectWithoutUserInput = {
    where: LinkWhereUniqueInput
    create: XOR<LinkCreateWithoutUserInput, LinkUncheckedCreateWithoutUserInput>
  }

  export type LinkCreateManyUserInputEnvelope = {
    data: LinkCreateManyUserInput | LinkCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TagCreateWithoutUserInput = {
    value: string
    label: string
    guestId: string
    links?: LinkTagCreateNestedManyWithoutTagInput
  }

  export type TagUncheckedCreateWithoutUserInput = {
    id?: number
    value: string
    label: string
    guestId: string
    links?: LinkTagUncheckedCreateNestedManyWithoutTagInput
  }

  export type TagCreateOrConnectWithoutUserInput = {
    where: TagWhereUniqueInput
    create: XOR<TagCreateWithoutUserInput, TagUncheckedCreateWithoutUserInput>
  }

  export type TagCreateManyUserInputEnvelope = {
    data: TagCreateManyUserInput | TagCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type LinkTagCreateWithoutUserInput = {
    guestId: string
    link: LinkCreateNestedOneWithoutLinkTagsInput
    tag: TagCreateNestedOneWithoutLinksInput
  }

  export type LinkTagUncheckedCreateWithoutUserInput = {
    id?: number
    linkId: number
    tagId: number
    guestId: string
  }

  export type LinkTagCreateOrConnectWithoutUserInput = {
    where: LinkTagWhereUniqueInput
    create: XOR<LinkTagCreateWithoutUserInput, LinkTagUncheckedCreateWithoutUserInput>
  }

  export type LinkTagCreateManyUserInputEnvelope = {
    data: LinkTagCreateManyUserInput | LinkTagCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ShortLinkCreateWithoutUserInput = {
    url: string
    shortUrl: string
    createdAt?: Date | string
    guestId: string
  }

  export type ShortLinkUncheckedCreateWithoutUserInput = {
    id?: number
    url: string
    shortUrl: string
    createdAt?: Date | string
    guestId: string
  }

  export type ShortLinkCreateOrConnectWithoutUserInput = {
    where: ShortLinkWhereUniqueInput
    create: XOR<ShortLinkCreateWithoutUserInput, ShortLinkUncheckedCreateWithoutUserInput>
  }

  export type ShortLinkCreateManyUserInputEnvelope = {
    data: ShortLinkCreateManyUserInput | ShortLinkCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type LinkUpsertWithWhereUniqueWithoutUserInput = {
    where: LinkWhereUniqueInput
    update: XOR<LinkUpdateWithoutUserInput, LinkUncheckedUpdateWithoutUserInput>
    create: XOR<LinkCreateWithoutUserInput, LinkUncheckedCreateWithoutUserInput>
  }

  export type LinkUpdateWithWhereUniqueWithoutUserInput = {
    where: LinkWhereUniqueInput
    data: XOR<LinkUpdateWithoutUserInput, LinkUncheckedUpdateWithoutUserInput>
  }

  export type LinkUpdateManyWithWhereWithoutUserInput = {
    where: LinkScalarWhereInput
    data: XOR<LinkUpdateManyMutationInput, LinkUncheckedUpdateManyWithoutUserInput>
  }

  export type LinkScalarWhereInput = {
    AND?: LinkScalarWhereInput | LinkScalarWhereInput[]
    OR?: LinkScalarWhereInput[]
    NOT?: LinkScalarWhereInput | LinkScalarWhereInput[]
    id?: IntFilter<"Link"> | number
    title?: StringFilter<"Link"> | string
    description?: StringFilter<"Link"> | string
    logo?: StringFilter<"Link"> | string
    img?: StringFilter<"Link"> | string
    url?: StringFilter<"Link"> | string
    shortUrl?: StringFilter<"Link"> | string
    comment?: StringFilter<"Link"> | string
    createdAt?: DateTimeFilter<"Link"> | Date | string
    updatedAt?: DateTimeFilter<"Link"> | Date | string
    userId?: IntNullableFilter<"Link"> | number | null
    guestId?: StringFilter<"Link"> | string
  }

  export type TagUpsertWithWhereUniqueWithoutUserInput = {
    where: TagWhereUniqueInput
    update: XOR<TagUpdateWithoutUserInput, TagUncheckedUpdateWithoutUserInput>
    create: XOR<TagCreateWithoutUserInput, TagUncheckedCreateWithoutUserInput>
  }

  export type TagUpdateWithWhereUniqueWithoutUserInput = {
    where: TagWhereUniqueInput
    data: XOR<TagUpdateWithoutUserInput, TagUncheckedUpdateWithoutUserInput>
  }

  export type TagUpdateManyWithWhereWithoutUserInput = {
    where: TagScalarWhereInput
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyWithoutUserInput>
  }

  export type TagScalarWhereInput = {
    AND?: TagScalarWhereInput | TagScalarWhereInput[]
    OR?: TagScalarWhereInput[]
    NOT?: TagScalarWhereInput | TagScalarWhereInput[]
    id?: IntFilter<"Tag"> | number
    value?: StringFilter<"Tag"> | string
    label?: StringFilter<"Tag"> | string
    userId?: IntNullableFilter<"Tag"> | number | null
    guestId?: StringFilter<"Tag"> | string
  }

  export type LinkTagUpsertWithWhereUniqueWithoutUserInput = {
    where: LinkTagWhereUniqueInput
    update: XOR<LinkTagUpdateWithoutUserInput, LinkTagUncheckedUpdateWithoutUserInput>
    create: XOR<LinkTagCreateWithoutUserInput, LinkTagUncheckedCreateWithoutUserInput>
  }

  export type LinkTagUpdateWithWhereUniqueWithoutUserInput = {
    where: LinkTagWhereUniqueInput
    data: XOR<LinkTagUpdateWithoutUserInput, LinkTagUncheckedUpdateWithoutUserInput>
  }

  export type LinkTagUpdateManyWithWhereWithoutUserInput = {
    where: LinkTagScalarWhereInput
    data: XOR<LinkTagUpdateManyMutationInput, LinkTagUncheckedUpdateManyWithoutUserInput>
  }

  export type LinkTagScalarWhereInput = {
    AND?: LinkTagScalarWhereInput | LinkTagScalarWhereInput[]
    OR?: LinkTagScalarWhereInput[]
    NOT?: LinkTagScalarWhereInput | LinkTagScalarWhereInput[]
    id?: IntFilter<"LinkTag"> | number
    linkId?: IntFilter<"LinkTag"> | number
    tagId?: IntFilter<"LinkTag"> | number
    userId?: IntNullableFilter<"LinkTag"> | number | null
    guestId?: StringFilter<"LinkTag"> | string
  }

  export type ShortLinkUpsertWithWhereUniqueWithoutUserInput = {
    where: ShortLinkWhereUniqueInput
    update: XOR<ShortLinkUpdateWithoutUserInput, ShortLinkUncheckedUpdateWithoutUserInput>
    create: XOR<ShortLinkCreateWithoutUserInput, ShortLinkUncheckedCreateWithoutUserInput>
  }

  export type ShortLinkUpdateWithWhereUniqueWithoutUserInput = {
    where: ShortLinkWhereUniqueInput
    data: XOR<ShortLinkUpdateWithoutUserInput, ShortLinkUncheckedUpdateWithoutUserInput>
  }

  export type ShortLinkUpdateManyWithWhereWithoutUserInput = {
    where: ShortLinkScalarWhereInput
    data: XOR<ShortLinkUpdateManyMutationInput, ShortLinkUncheckedUpdateManyWithoutUserInput>
  }

  export type ShortLinkScalarWhereInput = {
    AND?: ShortLinkScalarWhereInput | ShortLinkScalarWhereInput[]
    OR?: ShortLinkScalarWhereInput[]
    NOT?: ShortLinkScalarWhereInput | ShortLinkScalarWhereInput[]
    id?: IntFilter<"ShortLink"> | number
    url?: StringFilter<"ShortLink"> | string
    shortUrl?: StringFilter<"ShortLink"> | string
    createdAt?: DateTimeFilter<"ShortLink"> | Date | string
    userId?: IntNullableFilter<"ShortLink"> | number | null
    guestId?: StringFilter<"ShortLink"> | string
  }

  export type UserCreateWithoutLinksInput = {
    username: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    tags?: TagCreateNestedManyWithoutUserInput
    linkTags?: LinkTagCreateNestedManyWithoutUserInput
    shortLinks?: ShortLinkCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutLinksInput = {
    id?: number
    username: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    tags?: TagUncheckedCreateNestedManyWithoutUserInput
    linkTags?: LinkTagUncheckedCreateNestedManyWithoutUserInput
    shortLinks?: ShortLinkUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutLinksInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLinksInput, UserUncheckedCreateWithoutLinksInput>
  }

  export type LinkTagCreateWithoutLinkInput = {
    guestId: string
    tag: TagCreateNestedOneWithoutLinksInput
    user?: UserCreateNestedOneWithoutLinkTagsInput
  }

  export type LinkTagUncheckedCreateWithoutLinkInput = {
    id?: number
    tagId: number
    userId?: number | null
    guestId: string
  }

  export type LinkTagCreateOrConnectWithoutLinkInput = {
    where: LinkTagWhereUniqueInput
    create: XOR<LinkTagCreateWithoutLinkInput, LinkTagUncheckedCreateWithoutLinkInput>
  }

  export type LinkTagCreateManyLinkInputEnvelope = {
    data: LinkTagCreateManyLinkInput | LinkTagCreateManyLinkInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutLinksInput = {
    update: XOR<UserUpdateWithoutLinksInput, UserUncheckedUpdateWithoutLinksInput>
    create: XOR<UserCreateWithoutLinksInput, UserUncheckedCreateWithoutLinksInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLinksInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLinksInput, UserUncheckedUpdateWithoutLinksInput>
  }

  export type UserUpdateWithoutLinksInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: TagUpdateManyWithoutUserNestedInput
    linkTags?: LinkTagUpdateManyWithoutUserNestedInput
    shortLinks?: ShortLinkUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutLinksInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: TagUncheckedUpdateManyWithoutUserNestedInput
    linkTags?: LinkTagUncheckedUpdateManyWithoutUserNestedInput
    shortLinks?: ShortLinkUncheckedUpdateManyWithoutUserNestedInput
  }

  export type LinkTagUpsertWithWhereUniqueWithoutLinkInput = {
    where: LinkTagWhereUniqueInput
    update: XOR<LinkTagUpdateWithoutLinkInput, LinkTagUncheckedUpdateWithoutLinkInput>
    create: XOR<LinkTagCreateWithoutLinkInput, LinkTagUncheckedCreateWithoutLinkInput>
  }

  export type LinkTagUpdateWithWhereUniqueWithoutLinkInput = {
    where: LinkTagWhereUniqueInput
    data: XOR<LinkTagUpdateWithoutLinkInput, LinkTagUncheckedUpdateWithoutLinkInput>
  }

  export type LinkTagUpdateManyWithWhereWithoutLinkInput = {
    where: LinkTagScalarWhereInput
    data: XOR<LinkTagUpdateManyMutationInput, LinkTagUncheckedUpdateManyWithoutLinkInput>
  }

  export type UserCreateWithoutTagsInput = {
    username: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    links?: LinkCreateNestedManyWithoutUserInput
    linkTags?: LinkTagCreateNestedManyWithoutUserInput
    shortLinks?: ShortLinkCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTagsInput = {
    id?: number
    username: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    links?: LinkUncheckedCreateNestedManyWithoutUserInput
    linkTags?: LinkTagUncheckedCreateNestedManyWithoutUserInput
    shortLinks?: ShortLinkUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTagsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTagsInput, UserUncheckedCreateWithoutTagsInput>
  }

  export type LinkTagCreateWithoutTagInput = {
    guestId: string
    link: LinkCreateNestedOneWithoutLinkTagsInput
    user?: UserCreateNestedOneWithoutLinkTagsInput
  }

  export type LinkTagUncheckedCreateWithoutTagInput = {
    id?: number
    linkId: number
    userId?: number | null
    guestId: string
  }

  export type LinkTagCreateOrConnectWithoutTagInput = {
    where: LinkTagWhereUniqueInput
    create: XOR<LinkTagCreateWithoutTagInput, LinkTagUncheckedCreateWithoutTagInput>
  }

  export type LinkTagCreateManyTagInputEnvelope = {
    data: LinkTagCreateManyTagInput | LinkTagCreateManyTagInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutTagsInput = {
    update: XOR<UserUpdateWithoutTagsInput, UserUncheckedUpdateWithoutTagsInput>
    create: XOR<UserCreateWithoutTagsInput, UserUncheckedCreateWithoutTagsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTagsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTagsInput, UserUncheckedUpdateWithoutTagsInput>
  }

  export type UserUpdateWithoutTagsInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    links?: LinkUpdateManyWithoutUserNestedInput
    linkTags?: LinkTagUpdateManyWithoutUserNestedInput
    shortLinks?: ShortLinkUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTagsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    links?: LinkUncheckedUpdateManyWithoutUserNestedInput
    linkTags?: LinkTagUncheckedUpdateManyWithoutUserNestedInput
    shortLinks?: ShortLinkUncheckedUpdateManyWithoutUserNestedInput
  }

  export type LinkTagUpsertWithWhereUniqueWithoutTagInput = {
    where: LinkTagWhereUniqueInput
    update: XOR<LinkTagUpdateWithoutTagInput, LinkTagUncheckedUpdateWithoutTagInput>
    create: XOR<LinkTagCreateWithoutTagInput, LinkTagUncheckedCreateWithoutTagInput>
  }

  export type LinkTagUpdateWithWhereUniqueWithoutTagInput = {
    where: LinkTagWhereUniqueInput
    data: XOR<LinkTagUpdateWithoutTagInput, LinkTagUncheckedUpdateWithoutTagInput>
  }

  export type LinkTagUpdateManyWithWhereWithoutTagInput = {
    where: LinkTagScalarWhereInput
    data: XOR<LinkTagUpdateManyMutationInput, LinkTagUncheckedUpdateManyWithoutTagInput>
  }

  export type LinkCreateWithoutLinkTagsInput = {
    title: string
    description: string
    logo: string
    img: string
    url: string
    shortUrl: string
    comment: string
    createdAt?: Date | string
    updatedAt?: Date | string
    guestId: string
    user?: UserCreateNestedOneWithoutLinksInput
  }

  export type LinkUncheckedCreateWithoutLinkTagsInput = {
    id?: number
    title: string
    description: string
    logo: string
    img: string
    url: string
    shortUrl: string
    comment: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId?: number | null
    guestId: string
  }

  export type LinkCreateOrConnectWithoutLinkTagsInput = {
    where: LinkWhereUniqueInput
    create: XOR<LinkCreateWithoutLinkTagsInput, LinkUncheckedCreateWithoutLinkTagsInput>
  }

  export type TagCreateWithoutLinksInput = {
    value: string
    label: string
    guestId: string
    user?: UserCreateNestedOneWithoutTagsInput
  }

  export type TagUncheckedCreateWithoutLinksInput = {
    id?: number
    value: string
    label: string
    userId?: number | null
    guestId: string
  }

  export type TagCreateOrConnectWithoutLinksInput = {
    where: TagWhereUniqueInput
    create: XOR<TagCreateWithoutLinksInput, TagUncheckedCreateWithoutLinksInput>
  }

  export type UserCreateWithoutLinkTagsInput = {
    username: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    links?: LinkCreateNestedManyWithoutUserInput
    tags?: TagCreateNestedManyWithoutUserInput
    shortLinks?: ShortLinkCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutLinkTagsInput = {
    id?: number
    username: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    links?: LinkUncheckedCreateNestedManyWithoutUserInput
    tags?: TagUncheckedCreateNestedManyWithoutUserInput
    shortLinks?: ShortLinkUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutLinkTagsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLinkTagsInput, UserUncheckedCreateWithoutLinkTagsInput>
  }

  export type LinkUpsertWithoutLinkTagsInput = {
    update: XOR<LinkUpdateWithoutLinkTagsInput, LinkUncheckedUpdateWithoutLinkTagsInput>
    create: XOR<LinkCreateWithoutLinkTagsInput, LinkUncheckedCreateWithoutLinkTagsInput>
    where?: LinkWhereInput
  }

  export type LinkUpdateToOneWithWhereWithoutLinkTagsInput = {
    where?: LinkWhereInput
    data: XOR<LinkUpdateWithoutLinkTagsInput, LinkUncheckedUpdateWithoutLinkTagsInput>
  }

  export type LinkUpdateWithoutLinkTagsInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    img?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    shortUrl?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    guestId?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneWithoutLinksNestedInput
  }

  export type LinkUncheckedUpdateWithoutLinkTagsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    img?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    shortUrl?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    guestId?: StringFieldUpdateOperationsInput | string
  }

  export type TagUpsertWithoutLinksInput = {
    update: XOR<TagUpdateWithoutLinksInput, TagUncheckedUpdateWithoutLinksInput>
    create: XOR<TagCreateWithoutLinksInput, TagUncheckedCreateWithoutLinksInput>
    where?: TagWhereInput
  }

  export type TagUpdateToOneWithWhereWithoutLinksInput = {
    where?: TagWhereInput
    data: XOR<TagUpdateWithoutLinksInput, TagUncheckedUpdateWithoutLinksInput>
  }

  export type TagUpdateWithoutLinksInput = {
    value?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    guestId?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneWithoutTagsNestedInput
  }

  export type TagUncheckedUpdateWithoutLinksInput = {
    id?: IntFieldUpdateOperationsInput | number
    value?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    guestId?: StringFieldUpdateOperationsInput | string
  }

  export type UserUpsertWithoutLinkTagsInput = {
    update: XOR<UserUpdateWithoutLinkTagsInput, UserUncheckedUpdateWithoutLinkTagsInput>
    create: XOR<UserCreateWithoutLinkTagsInput, UserUncheckedCreateWithoutLinkTagsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLinkTagsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLinkTagsInput, UserUncheckedUpdateWithoutLinkTagsInput>
  }

  export type UserUpdateWithoutLinkTagsInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    links?: LinkUpdateManyWithoutUserNestedInput
    tags?: TagUpdateManyWithoutUserNestedInput
    shortLinks?: ShortLinkUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutLinkTagsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    links?: LinkUncheckedUpdateManyWithoutUserNestedInput
    tags?: TagUncheckedUpdateManyWithoutUserNestedInput
    shortLinks?: ShortLinkUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutShortLinksInput = {
    username: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    links?: LinkCreateNestedManyWithoutUserInput
    tags?: TagCreateNestedManyWithoutUserInput
    linkTags?: LinkTagCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutShortLinksInput = {
    id?: number
    username: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    links?: LinkUncheckedCreateNestedManyWithoutUserInput
    tags?: TagUncheckedCreateNestedManyWithoutUserInput
    linkTags?: LinkTagUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutShortLinksInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutShortLinksInput, UserUncheckedCreateWithoutShortLinksInput>
  }

  export type UserUpsertWithoutShortLinksInput = {
    update: XOR<UserUpdateWithoutShortLinksInput, UserUncheckedUpdateWithoutShortLinksInput>
    create: XOR<UserCreateWithoutShortLinksInput, UserUncheckedCreateWithoutShortLinksInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutShortLinksInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutShortLinksInput, UserUncheckedUpdateWithoutShortLinksInput>
  }

  export type UserUpdateWithoutShortLinksInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    links?: LinkUpdateManyWithoutUserNestedInput
    tags?: TagUpdateManyWithoutUserNestedInput
    linkTags?: LinkTagUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutShortLinksInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    links?: LinkUncheckedUpdateManyWithoutUserNestedInput
    tags?: TagUncheckedUpdateManyWithoutUserNestedInput
    linkTags?: LinkTagUncheckedUpdateManyWithoutUserNestedInput
  }

  export type LinkCreateManyUserInput = {
    id?: number
    title: string
    description: string
    logo: string
    img: string
    url: string
    shortUrl: string
    comment: string
    createdAt?: Date | string
    updatedAt?: Date | string
    guestId: string
  }

  export type TagCreateManyUserInput = {
    id?: number
    value: string
    label: string
    guestId: string
  }

  export type LinkTagCreateManyUserInput = {
    id?: number
    linkId: number
    tagId: number
    guestId: string
  }

  export type ShortLinkCreateManyUserInput = {
    id?: number
    url: string
    shortUrl: string
    createdAt?: Date | string
    guestId: string
  }

  export type LinkUpdateWithoutUserInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    img?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    shortUrl?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    guestId?: StringFieldUpdateOperationsInput | string
    linkTags?: LinkTagUpdateManyWithoutLinkNestedInput
  }

  export type LinkUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    img?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    shortUrl?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    guestId?: StringFieldUpdateOperationsInput | string
    linkTags?: LinkTagUncheckedUpdateManyWithoutLinkNestedInput
  }

  export type LinkUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    img?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    shortUrl?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    guestId?: StringFieldUpdateOperationsInput | string
  }

  export type TagUpdateWithoutUserInput = {
    value?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    guestId?: StringFieldUpdateOperationsInput | string
    links?: LinkTagUpdateManyWithoutTagNestedInput
  }

  export type TagUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    value?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    guestId?: StringFieldUpdateOperationsInput | string
    links?: LinkTagUncheckedUpdateManyWithoutTagNestedInput
  }

  export type TagUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    value?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    guestId?: StringFieldUpdateOperationsInput | string
  }

  export type LinkTagUpdateWithoutUserInput = {
    guestId?: StringFieldUpdateOperationsInput | string
    link?: LinkUpdateOneRequiredWithoutLinkTagsNestedInput
    tag?: TagUpdateOneRequiredWithoutLinksNestedInput
  }

  export type LinkTagUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    linkId?: IntFieldUpdateOperationsInput | number
    tagId?: IntFieldUpdateOperationsInput | number
    guestId?: StringFieldUpdateOperationsInput | string
  }

  export type LinkTagUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    linkId?: IntFieldUpdateOperationsInput | number
    tagId?: IntFieldUpdateOperationsInput | number
    guestId?: StringFieldUpdateOperationsInput | string
  }

  export type ShortLinkUpdateWithoutUserInput = {
    url?: StringFieldUpdateOperationsInput | string
    shortUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    guestId?: StringFieldUpdateOperationsInput | string
  }

  export type ShortLinkUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    shortUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    guestId?: StringFieldUpdateOperationsInput | string
  }

  export type ShortLinkUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    shortUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    guestId?: StringFieldUpdateOperationsInput | string
  }

  export type LinkTagCreateManyLinkInput = {
    id?: number
    tagId: number
    userId?: number | null
    guestId: string
  }

  export type LinkTagUpdateWithoutLinkInput = {
    guestId?: StringFieldUpdateOperationsInput | string
    tag?: TagUpdateOneRequiredWithoutLinksNestedInput
    user?: UserUpdateOneWithoutLinkTagsNestedInput
  }

  export type LinkTagUncheckedUpdateWithoutLinkInput = {
    id?: IntFieldUpdateOperationsInput | number
    tagId?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    guestId?: StringFieldUpdateOperationsInput | string
  }

  export type LinkTagUncheckedUpdateManyWithoutLinkInput = {
    id?: IntFieldUpdateOperationsInput | number
    tagId?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    guestId?: StringFieldUpdateOperationsInput | string
  }

  export type LinkTagCreateManyTagInput = {
    id?: number
    linkId: number
    userId?: number | null
    guestId: string
  }

  export type LinkTagUpdateWithoutTagInput = {
    guestId?: StringFieldUpdateOperationsInput | string
    link?: LinkUpdateOneRequiredWithoutLinkTagsNestedInput
    user?: UserUpdateOneWithoutLinkTagsNestedInput
  }

  export type LinkTagUncheckedUpdateWithoutTagInput = {
    id?: IntFieldUpdateOperationsInput | number
    linkId?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    guestId?: StringFieldUpdateOperationsInput | string
  }

  export type LinkTagUncheckedUpdateManyWithoutTagInput = {
    id?: IntFieldUpdateOperationsInput | number
    linkId?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    guestId?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}
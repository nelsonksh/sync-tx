
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
 * Model NetworkTxCbor
 * Captures full CBOR for key transactions (primary debug and data source)
 */
export type NetworkTxCbor = $Result.DefaultSelection<Prisma.$NetworkTxCborPayload>
/**
 * Model NetworkTxOutput
 * Maps UTxOs to validator types, useful for post-processing output usage
 */
export type NetworkTxOutput = $Result.DefaultSelection<Prisma.$NetworkTxOutputPayload>
/**
 * Model Instance
 * Represents deployed on-chain scripts (by type and policy)
 */
export type Instance = $Result.DefaultSelection<Prisma.$InstancePayload>
/**
 * Model ProjectDetails
 * Ties a group of script instances into a project-level abstraction
 */
export type ProjectDetails = $Result.DefaultSelection<Prisma.$ProjectDetailsPayload>
/**
 * Model LocalStateTxCbor
 * Captures CBOR content for stateful transactions
 */
export type LocalStateTxCbor = $Result.DefaultSelection<Prisma.$LocalStateTxCborPayload>
/**
 * Model LocalStateTxOutput
 * Maps local state transactions to outputs by validator
 */
export type LocalStateTxOutput = $Result.DefaultSelection<Prisma.$LocalStateTxOutputPayload>
/**
 * Model TransactionSyncTip
 * Stores synced slot tips for network txs
 */
export type TransactionSyncTip = $Result.DefaultSelection<Prisma.$TransactionSyncTipPayload>
/**
 * Model Utxo
 * Raw on-chain outputs and associated data (used by multiple systems)
 */
export type Utxo = $Result.DefaultSelection<Prisma.$UtxoPayload>
/**
 * Model MultiAsset
 * Represents multi-assets contained within a UTxO
 */
export type MultiAsset = $Result.DefaultSelection<Prisma.$MultiAssetPayload>
/**
 * Model InstancePolicy
 * Represents the top-level NFT policy used to group `Instance`s
 */
export type InstancePolicy = $Result.DefaultSelection<Prisma.$InstancePolicyPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const ScriptCategory: {
  ModuleScripts: 'ModuleScripts',
  CourseStateScripts: 'CourseStateScripts',
  AssignmentValidator: 'AssignmentValidator',
  TreasuryScripts: 'TreasuryScripts',
  TreasuryToken: 'TreasuryToken',
  Escrow1: 'Escrow1',
  ContributorStateScripts: 'ContributorStateScripts'
};

export type ScriptCategory = (typeof ScriptCategory)[keyof typeof ScriptCategory]


export const NetworkValidator: {
  AliasIndexValidator: 'AliasIndexValidator',
  GlobalStateValidator: 'GlobalStateValidator',
  GovernanceValidator: 'GovernanceValidator',
  InstanceValidator: 'InstanceValidator'
};

export type NetworkValidator = (typeof NetworkValidator)[keyof typeof NetworkValidator]

}

export type ScriptCategory = $Enums.ScriptCategory

export const ScriptCategory: typeof $Enums.ScriptCategory

export type NetworkValidator = $Enums.NetworkValidator

export const NetworkValidator: typeof $Enums.NetworkValidator

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more NetworkTxCbors
 * const networkTxCbors = await prisma.networkTxCbor.findMany()
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
   * // Fetch zero or more NetworkTxCbors
   * const networkTxCbors = await prisma.networkTxCbor.findMany()
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
   * `prisma.networkTxCbor`: Exposes CRUD operations for the **NetworkTxCbor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NetworkTxCbors
    * const networkTxCbors = await prisma.networkTxCbor.findMany()
    * ```
    */
  get networkTxCbor(): Prisma.NetworkTxCborDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.networkTxOutput`: Exposes CRUD operations for the **NetworkTxOutput** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NetworkTxOutputs
    * const networkTxOutputs = await prisma.networkTxOutput.findMany()
    * ```
    */
  get networkTxOutput(): Prisma.NetworkTxOutputDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.instance`: Exposes CRUD operations for the **Instance** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Instances
    * const instances = await prisma.instance.findMany()
    * ```
    */
  get instance(): Prisma.InstanceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.projectDetails`: Exposes CRUD operations for the **ProjectDetails** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProjectDetails
    * const projectDetails = await prisma.projectDetails.findMany()
    * ```
    */
  get projectDetails(): Prisma.ProjectDetailsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.localStateTxCbor`: Exposes CRUD operations for the **LocalStateTxCbor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LocalStateTxCbors
    * const localStateTxCbors = await prisma.localStateTxCbor.findMany()
    * ```
    */
  get localStateTxCbor(): Prisma.LocalStateTxCborDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.localStateTxOutput`: Exposes CRUD operations for the **LocalStateTxOutput** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LocalStateTxOutputs
    * const localStateTxOutputs = await prisma.localStateTxOutput.findMany()
    * ```
    */
  get localStateTxOutput(): Prisma.LocalStateTxOutputDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.transactionSyncTip`: Exposes CRUD operations for the **TransactionSyncTip** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TransactionSyncTips
    * const transactionSyncTips = await prisma.transactionSyncTip.findMany()
    * ```
    */
  get transactionSyncTip(): Prisma.TransactionSyncTipDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.utxo`: Exposes CRUD operations for the **Utxo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Utxos
    * const utxos = await prisma.utxo.findMany()
    * ```
    */
  get utxo(): Prisma.UtxoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.multiAsset`: Exposes CRUD operations for the **MultiAsset** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MultiAssets
    * const multiAssets = await prisma.multiAsset.findMany()
    * ```
    */
  get multiAsset(): Prisma.MultiAssetDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.instancePolicy`: Exposes CRUD operations for the **InstancePolicy** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more InstancePolicies
    * const instancePolicies = await prisma.instancePolicy.findMany()
    * ```
    */
  get instancePolicy(): Prisma.InstancePolicyDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
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
    NetworkTxCbor: 'NetworkTxCbor',
    NetworkTxOutput: 'NetworkTxOutput',
    Instance: 'Instance',
    ProjectDetails: 'ProjectDetails',
    LocalStateTxCbor: 'LocalStateTxCbor',
    LocalStateTxOutput: 'LocalStateTxOutput',
    TransactionSyncTip: 'TransactionSyncTip',
    Utxo: 'Utxo',
    MultiAsset: 'MultiAsset',
    InstancePolicy: 'InstancePolicy'
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
      modelProps: "networkTxCbor" | "networkTxOutput" | "instance" | "projectDetails" | "localStateTxCbor" | "localStateTxOutput" | "transactionSyncTip" | "utxo" | "multiAsset" | "instancePolicy"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      NetworkTxCbor: {
        payload: Prisma.$NetworkTxCborPayload<ExtArgs>
        fields: Prisma.NetworkTxCborFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NetworkTxCborFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NetworkTxCborPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NetworkTxCborFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NetworkTxCborPayload>
          }
          findFirst: {
            args: Prisma.NetworkTxCborFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NetworkTxCborPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NetworkTxCborFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NetworkTxCborPayload>
          }
          findMany: {
            args: Prisma.NetworkTxCborFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NetworkTxCborPayload>[]
          }
          create: {
            args: Prisma.NetworkTxCborCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NetworkTxCborPayload>
          }
          createMany: {
            args: Prisma.NetworkTxCborCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NetworkTxCborCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NetworkTxCborPayload>[]
          }
          delete: {
            args: Prisma.NetworkTxCborDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NetworkTxCborPayload>
          }
          update: {
            args: Prisma.NetworkTxCborUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NetworkTxCborPayload>
          }
          deleteMany: {
            args: Prisma.NetworkTxCborDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NetworkTxCborUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NetworkTxCborUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NetworkTxCborPayload>[]
          }
          upsert: {
            args: Prisma.NetworkTxCborUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NetworkTxCborPayload>
          }
          aggregate: {
            args: Prisma.NetworkTxCborAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNetworkTxCbor>
          }
          groupBy: {
            args: Prisma.NetworkTxCborGroupByArgs<ExtArgs>
            result: $Utils.Optional<NetworkTxCborGroupByOutputType>[]
          }
          count: {
            args: Prisma.NetworkTxCborCountArgs<ExtArgs>
            result: $Utils.Optional<NetworkTxCborCountAggregateOutputType> | number
          }
        }
      }
      NetworkTxOutput: {
        payload: Prisma.$NetworkTxOutputPayload<ExtArgs>
        fields: Prisma.NetworkTxOutputFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NetworkTxOutputFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NetworkTxOutputPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NetworkTxOutputFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NetworkTxOutputPayload>
          }
          findFirst: {
            args: Prisma.NetworkTxOutputFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NetworkTxOutputPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NetworkTxOutputFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NetworkTxOutputPayload>
          }
          findMany: {
            args: Prisma.NetworkTxOutputFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NetworkTxOutputPayload>[]
          }
          create: {
            args: Prisma.NetworkTxOutputCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NetworkTxOutputPayload>
          }
          createMany: {
            args: Prisma.NetworkTxOutputCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NetworkTxOutputCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NetworkTxOutputPayload>[]
          }
          delete: {
            args: Prisma.NetworkTxOutputDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NetworkTxOutputPayload>
          }
          update: {
            args: Prisma.NetworkTxOutputUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NetworkTxOutputPayload>
          }
          deleteMany: {
            args: Prisma.NetworkTxOutputDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NetworkTxOutputUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NetworkTxOutputUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NetworkTxOutputPayload>[]
          }
          upsert: {
            args: Prisma.NetworkTxOutputUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NetworkTxOutputPayload>
          }
          aggregate: {
            args: Prisma.NetworkTxOutputAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNetworkTxOutput>
          }
          groupBy: {
            args: Prisma.NetworkTxOutputGroupByArgs<ExtArgs>
            result: $Utils.Optional<NetworkTxOutputGroupByOutputType>[]
          }
          count: {
            args: Prisma.NetworkTxOutputCountArgs<ExtArgs>
            result: $Utils.Optional<NetworkTxOutputCountAggregateOutputType> | number
          }
        }
      }
      Instance: {
        payload: Prisma.$InstancePayload<ExtArgs>
        fields: Prisma.InstanceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InstanceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstancePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InstanceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstancePayload>
          }
          findFirst: {
            args: Prisma.InstanceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstancePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InstanceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstancePayload>
          }
          findMany: {
            args: Prisma.InstanceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstancePayload>[]
          }
          create: {
            args: Prisma.InstanceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstancePayload>
          }
          createMany: {
            args: Prisma.InstanceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InstanceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstancePayload>[]
          }
          delete: {
            args: Prisma.InstanceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstancePayload>
          }
          update: {
            args: Prisma.InstanceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstancePayload>
          }
          deleteMany: {
            args: Prisma.InstanceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InstanceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InstanceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstancePayload>[]
          }
          upsert: {
            args: Prisma.InstanceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstancePayload>
          }
          aggregate: {
            args: Prisma.InstanceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInstance>
          }
          groupBy: {
            args: Prisma.InstanceGroupByArgs<ExtArgs>
            result: $Utils.Optional<InstanceGroupByOutputType>[]
          }
          count: {
            args: Prisma.InstanceCountArgs<ExtArgs>
            result: $Utils.Optional<InstanceCountAggregateOutputType> | number
          }
        }
      }
      ProjectDetails: {
        payload: Prisma.$ProjectDetailsPayload<ExtArgs>
        fields: Prisma.ProjectDetailsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectDetailsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectDetailsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectDetailsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectDetailsPayload>
          }
          findFirst: {
            args: Prisma.ProjectDetailsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectDetailsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectDetailsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectDetailsPayload>
          }
          findMany: {
            args: Prisma.ProjectDetailsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectDetailsPayload>[]
          }
          create: {
            args: Prisma.ProjectDetailsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectDetailsPayload>
          }
          createMany: {
            args: Prisma.ProjectDetailsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectDetailsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectDetailsPayload>[]
          }
          delete: {
            args: Prisma.ProjectDetailsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectDetailsPayload>
          }
          update: {
            args: Prisma.ProjectDetailsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectDetailsPayload>
          }
          deleteMany: {
            args: Prisma.ProjectDetailsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectDetailsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProjectDetailsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectDetailsPayload>[]
          }
          upsert: {
            args: Prisma.ProjectDetailsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectDetailsPayload>
          }
          aggregate: {
            args: Prisma.ProjectDetailsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProjectDetails>
          }
          groupBy: {
            args: Prisma.ProjectDetailsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectDetailsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectDetailsCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectDetailsCountAggregateOutputType> | number
          }
        }
      }
      LocalStateTxCbor: {
        payload: Prisma.$LocalStateTxCborPayload<ExtArgs>
        fields: Prisma.LocalStateTxCborFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LocalStateTxCborFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalStateTxCborPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LocalStateTxCborFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalStateTxCborPayload>
          }
          findFirst: {
            args: Prisma.LocalStateTxCborFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalStateTxCborPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LocalStateTxCborFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalStateTxCborPayload>
          }
          findMany: {
            args: Prisma.LocalStateTxCborFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalStateTxCborPayload>[]
          }
          create: {
            args: Prisma.LocalStateTxCborCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalStateTxCborPayload>
          }
          createMany: {
            args: Prisma.LocalStateTxCborCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LocalStateTxCborCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalStateTxCborPayload>[]
          }
          delete: {
            args: Prisma.LocalStateTxCborDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalStateTxCborPayload>
          }
          update: {
            args: Prisma.LocalStateTxCborUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalStateTxCborPayload>
          }
          deleteMany: {
            args: Prisma.LocalStateTxCborDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LocalStateTxCborUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LocalStateTxCborUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalStateTxCborPayload>[]
          }
          upsert: {
            args: Prisma.LocalStateTxCborUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalStateTxCborPayload>
          }
          aggregate: {
            args: Prisma.LocalStateTxCborAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLocalStateTxCbor>
          }
          groupBy: {
            args: Prisma.LocalStateTxCborGroupByArgs<ExtArgs>
            result: $Utils.Optional<LocalStateTxCborGroupByOutputType>[]
          }
          count: {
            args: Prisma.LocalStateTxCborCountArgs<ExtArgs>
            result: $Utils.Optional<LocalStateTxCborCountAggregateOutputType> | number
          }
        }
      }
      LocalStateTxOutput: {
        payload: Prisma.$LocalStateTxOutputPayload<ExtArgs>
        fields: Prisma.LocalStateTxOutputFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LocalStateTxOutputFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalStateTxOutputPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LocalStateTxOutputFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalStateTxOutputPayload>
          }
          findFirst: {
            args: Prisma.LocalStateTxOutputFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalStateTxOutputPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LocalStateTxOutputFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalStateTxOutputPayload>
          }
          findMany: {
            args: Prisma.LocalStateTxOutputFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalStateTxOutputPayload>[]
          }
          create: {
            args: Prisma.LocalStateTxOutputCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalStateTxOutputPayload>
          }
          createMany: {
            args: Prisma.LocalStateTxOutputCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LocalStateTxOutputCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalStateTxOutputPayload>[]
          }
          delete: {
            args: Prisma.LocalStateTxOutputDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalStateTxOutputPayload>
          }
          update: {
            args: Prisma.LocalStateTxOutputUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalStateTxOutputPayload>
          }
          deleteMany: {
            args: Prisma.LocalStateTxOutputDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LocalStateTxOutputUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LocalStateTxOutputUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalStateTxOutputPayload>[]
          }
          upsert: {
            args: Prisma.LocalStateTxOutputUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalStateTxOutputPayload>
          }
          aggregate: {
            args: Prisma.LocalStateTxOutputAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLocalStateTxOutput>
          }
          groupBy: {
            args: Prisma.LocalStateTxOutputGroupByArgs<ExtArgs>
            result: $Utils.Optional<LocalStateTxOutputGroupByOutputType>[]
          }
          count: {
            args: Prisma.LocalStateTxOutputCountArgs<ExtArgs>
            result: $Utils.Optional<LocalStateTxOutputCountAggregateOutputType> | number
          }
        }
      }
      TransactionSyncTip: {
        payload: Prisma.$TransactionSyncTipPayload<ExtArgs>
        fields: Prisma.TransactionSyncTipFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TransactionSyncTipFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionSyncTipPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TransactionSyncTipFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionSyncTipPayload>
          }
          findFirst: {
            args: Prisma.TransactionSyncTipFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionSyncTipPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TransactionSyncTipFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionSyncTipPayload>
          }
          findMany: {
            args: Prisma.TransactionSyncTipFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionSyncTipPayload>[]
          }
          create: {
            args: Prisma.TransactionSyncTipCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionSyncTipPayload>
          }
          createMany: {
            args: Prisma.TransactionSyncTipCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TransactionSyncTipCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionSyncTipPayload>[]
          }
          delete: {
            args: Prisma.TransactionSyncTipDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionSyncTipPayload>
          }
          update: {
            args: Prisma.TransactionSyncTipUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionSyncTipPayload>
          }
          deleteMany: {
            args: Prisma.TransactionSyncTipDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TransactionSyncTipUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TransactionSyncTipUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionSyncTipPayload>[]
          }
          upsert: {
            args: Prisma.TransactionSyncTipUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionSyncTipPayload>
          }
          aggregate: {
            args: Prisma.TransactionSyncTipAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransactionSyncTip>
          }
          groupBy: {
            args: Prisma.TransactionSyncTipGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransactionSyncTipGroupByOutputType>[]
          }
          count: {
            args: Prisma.TransactionSyncTipCountArgs<ExtArgs>
            result: $Utils.Optional<TransactionSyncTipCountAggregateOutputType> | number
          }
        }
      }
      Utxo: {
        payload: Prisma.$UtxoPayload<ExtArgs>
        fields: Prisma.UtxoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UtxoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtxoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UtxoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtxoPayload>
          }
          findFirst: {
            args: Prisma.UtxoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtxoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UtxoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtxoPayload>
          }
          findMany: {
            args: Prisma.UtxoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtxoPayload>[]
          }
          create: {
            args: Prisma.UtxoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtxoPayload>
          }
          createMany: {
            args: Prisma.UtxoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UtxoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtxoPayload>[]
          }
          delete: {
            args: Prisma.UtxoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtxoPayload>
          }
          update: {
            args: Prisma.UtxoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtxoPayload>
          }
          deleteMany: {
            args: Prisma.UtxoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UtxoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UtxoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtxoPayload>[]
          }
          upsert: {
            args: Prisma.UtxoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtxoPayload>
          }
          aggregate: {
            args: Prisma.UtxoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUtxo>
          }
          groupBy: {
            args: Prisma.UtxoGroupByArgs<ExtArgs>
            result: $Utils.Optional<UtxoGroupByOutputType>[]
          }
          count: {
            args: Prisma.UtxoCountArgs<ExtArgs>
            result: $Utils.Optional<UtxoCountAggregateOutputType> | number
          }
        }
      }
      MultiAsset: {
        payload: Prisma.$MultiAssetPayload<ExtArgs>
        fields: Prisma.MultiAssetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MultiAssetFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MultiAssetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MultiAssetFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MultiAssetPayload>
          }
          findFirst: {
            args: Prisma.MultiAssetFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MultiAssetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MultiAssetFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MultiAssetPayload>
          }
          findMany: {
            args: Prisma.MultiAssetFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MultiAssetPayload>[]
          }
          create: {
            args: Prisma.MultiAssetCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MultiAssetPayload>
          }
          createMany: {
            args: Prisma.MultiAssetCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MultiAssetCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MultiAssetPayload>[]
          }
          delete: {
            args: Prisma.MultiAssetDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MultiAssetPayload>
          }
          update: {
            args: Prisma.MultiAssetUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MultiAssetPayload>
          }
          deleteMany: {
            args: Prisma.MultiAssetDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MultiAssetUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MultiAssetUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MultiAssetPayload>[]
          }
          upsert: {
            args: Prisma.MultiAssetUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MultiAssetPayload>
          }
          aggregate: {
            args: Prisma.MultiAssetAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMultiAsset>
          }
          groupBy: {
            args: Prisma.MultiAssetGroupByArgs<ExtArgs>
            result: $Utils.Optional<MultiAssetGroupByOutputType>[]
          }
          count: {
            args: Prisma.MultiAssetCountArgs<ExtArgs>
            result: $Utils.Optional<MultiAssetCountAggregateOutputType> | number
          }
        }
      }
      InstancePolicy: {
        payload: Prisma.$InstancePolicyPayload<ExtArgs>
        fields: Prisma.InstancePolicyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InstancePolicyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstancePolicyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InstancePolicyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstancePolicyPayload>
          }
          findFirst: {
            args: Prisma.InstancePolicyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstancePolicyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InstancePolicyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstancePolicyPayload>
          }
          findMany: {
            args: Prisma.InstancePolicyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstancePolicyPayload>[]
          }
          create: {
            args: Prisma.InstancePolicyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstancePolicyPayload>
          }
          createMany: {
            args: Prisma.InstancePolicyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InstancePolicyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstancePolicyPayload>[]
          }
          delete: {
            args: Prisma.InstancePolicyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstancePolicyPayload>
          }
          update: {
            args: Prisma.InstancePolicyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstancePolicyPayload>
          }
          deleteMany: {
            args: Prisma.InstancePolicyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InstancePolicyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InstancePolicyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstancePolicyPayload>[]
          }
          upsert: {
            args: Prisma.InstancePolicyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstancePolicyPayload>
          }
          aggregate: {
            args: Prisma.InstancePolicyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInstancePolicy>
          }
          groupBy: {
            args: Prisma.InstancePolicyGroupByArgs<ExtArgs>
            result: $Utils.Optional<InstancePolicyGroupByOutputType>[]
          }
          count: {
            args: Prisma.InstancePolicyCountArgs<ExtArgs>
            result: $Utils.Optional<InstancePolicyCountAggregateOutputType> | number
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
    networkTxCbor?: NetworkTxCborOmit
    networkTxOutput?: NetworkTxOutputOmit
    instance?: InstanceOmit
    projectDetails?: ProjectDetailsOmit
    localStateTxCbor?: LocalStateTxCborOmit
    localStateTxOutput?: LocalStateTxOutputOmit
    transactionSyncTip?: TransactionSyncTipOmit
    utxo?: UtxoOmit
    multiAsset?: MultiAssetOmit
    instancePolicy?: InstancePolicyOmit
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
   * Count Type UtxoCountOutputType
   */

  export type UtxoCountOutputType = {
    MultiAsset: number
    NetworkTxOutput: number
    LocalStateTxOutput: number
  }

  export type UtxoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    MultiAsset?: boolean | UtxoCountOutputTypeCountMultiAssetArgs
    NetworkTxOutput?: boolean | UtxoCountOutputTypeCountNetworkTxOutputArgs
    LocalStateTxOutput?: boolean | UtxoCountOutputTypeCountLocalStateTxOutputArgs
  }

  // Custom InputTypes
  /**
   * UtxoCountOutputType without action
   */
  export type UtxoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UtxoCountOutputType
     */
    select?: UtxoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UtxoCountOutputType without action
   */
  export type UtxoCountOutputTypeCountMultiAssetArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MultiAssetWhereInput
  }

  /**
   * UtxoCountOutputType without action
   */
  export type UtxoCountOutputTypeCountNetworkTxOutputArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NetworkTxOutputWhereInput
  }

  /**
   * UtxoCountOutputType without action
   */
  export type UtxoCountOutputTypeCountLocalStateTxOutputArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LocalStateTxOutputWhereInput
  }


  /**
   * Count Type InstancePolicyCountOutputType
   */

  export type InstancePolicyCountOutputType = {
    Instance: number
  }

  export type InstancePolicyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Instance?: boolean | InstancePolicyCountOutputTypeCountInstanceArgs
  }

  // Custom InputTypes
  /**
   * InstancePolicyCountOutputType without action
   */
  export type InstancePolicyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstancePolicyCountOutputType
     */
    select?: InstancePolicyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * InstancePolicyCountOutputType without action
   */
  export type InstancePolicyCountOutputTypeCountInstanceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InstanceWhereInput
  }


  /**
   * Models
   */

  /**
   * Model NetworkTxCbor
   */

  export type AggregateNetworkTxCbor = {
    _count: NetworkTxCborCountAggregateOutputType | null
    _avg: NetworkTxCborAvgAggregateOutputType | null
    _sum: NetworkTxCborSumAggregateOutputType | null
    _min: NetworkTxCborMinAggregateOutputType | null
    _max: NetworkTxCborMaxAggregateOutputType | null
  }

  export type NetworkTxCborAvgAggregateOutputType = {
    id: number | null
  }

  export type NetworkTxCborSumAggregateOutputType = {
    id: number | null
  }

  export type NetworkTxCborMinAggregateOutputType = {
    id: number | null
    txHash: string | null
    cbor: string | null
    validator: $Enums.NetworkValidator | null
    createdAt: Date | null
  }

  export type NetworkTxCborMaxAggregateOutputType = {
    id: number | null
    txHash: string | null
    cbor: string | null
    validator: $Enums.NetworkValidator | null
    createdAt: Date | null
  }

  export type NetworkTxCborCountAggregateOutputType = {
    id: number
    txHash: number
    cbor: number
    validator: number
    createdAt: number
    _all: number
  }


  export type NetworkTxCborAvgAggregateInputType = {
    id?: true
  }

  export type NetworkTxCborSumAggregateInputType = {
    id?: true
  }

  export type NetworkTxCborMinAggregateInputType = {
    id?: true
    txHash?: true
    cbor?: true
    validator?: true
    createdAt?: true
  }

  export type NetworkTxCborMaxAggregateInputType = {
    id?: true
    txHash?: true
    cbor?: true
    validator?: true
    createdAt?: true
  }

  export type NetworkTxCborCountAggregateInputType = {
    id?: true
    txHash?: true
    cbor?: true
    validator?: true
    createdAt?: true
    _all?: true
  }

  export type NetworkTxCborAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NetworkTxCbor to aggregate.
     */
    where?: NetworkTxCborWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NetworkTxCbors to fetch.
     */
    orderBy?: NetworkTxCborOrderByWithRelationInput | NetworkTxCborOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NetworkTxCborWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NetworkTxCbors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NetworkTxCbors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NetworkTxCbors
    **/
    _count?: true | NetworkTxCborCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NetworkTxCborAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NetworkTxCborSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NetworkTxCborMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NetworkTxCborMaxAggregateInputType
  }

  export type GetNetworkTxCborAggregateType<T extends NetworkTxCborAggregateArgs> = {
        [P in keyof T & keyof AggregateNetworkTxCbor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNetworkTxCbor[P]>
      : GetScalarType<T[P], AggregateNetworkTxCbor[P]>
  }




  export type NetworkTxCborGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NetworkTxCborWhereInput
    orderBy?: NetworkTxCborOrderByWithAggregationInput | NetworkTxCborOrderByWithAggregationInput[]
    by: NetworkTxCborScalarFieldEnum[] | NetworkTxCborScalarFieldEnum
    having?: NetworkTxCborScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NetworkTxCborCountAggregateInputType | true
    _avg?: NetworkTxCborAvgAggregateInputType
    _sum?: NetworkTxCborSumAggregateInputType
    _min?: NetworkTxCborMinAggregateInputType
    _max?: NetworkTxCborMaxAggregateInputType
  }

  export type NetworkTxCborGroupByOutputType = {
    id: number
    txHash: string
    cbor: string
    validator: $Enums.NetworkValidator
    createdAt: Date
    _count: NetworkTxCborCountAggregateOutputType | null
    _avg: NetworkTxCborAvgAggregateOutputType | null
    _sum: NetworkTxCborSumAggregateOutputType | null
    _min: NetworkTxCborMinAggregateOutputType | null
    _max: NetworkTxCborMaxAggregateOutputType | null
  }

  type GetNetworkTxCborGroupByPayload<T extends NetworkTxCborGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NetworkTxCborGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NetworkTxCborGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NetworkTxCborGroupByOutputType[P]>
            : GetScalarType<T[P], NetworkTxCborGroupByOutputType[P]>
        }
      >
    >


  export type NetworkTxCborSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    txHash?: boolean
    cbor?: boolean
    validator?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["networkTxCbor"]>

  export type NetworkTxCborSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    txHash?: boolean
    cbor?: boolean
    validator?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["networkTxCbor"]>

  export type NetworkTxCborSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    txHash?: boolean
    cbor?: boolean
    validator?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["networkTxCbor"]>

  export type NetworkTxCborSelectScalar = {
    id?: boolean
    txHash?: boolean
    cbor?: boolean
    validator?: boolean
    createdAt?: boolean
  }

  export type NetworkTxCborOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "txHash" | "cbor" | "validator" | "createdAt", ExtArgs["result"]["networkTxCbor"]>

  export type $NetworkTxCborPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NetworkTxCbor"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      txHash: string
      cbor: string
      validator: $Enums.NetworkValidator
      createdAt: Date
    }, ExtArgs["result"]["networkTxCbor"]>
    composites: {}
  }

  type NetworkTxCborGetPayload<S extends boolean | null | undefined | NetworkTxCborDefaultArgs> = $Result.GetResult<Prisma.$NetworkTxCborPayload, S>

  type NetworkTxCborCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NetworkTxCborFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NetworkTxCborCountAggregateInputType | true
    }

  export interface NetworkTxCborDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NetworkTxCbor'], meta: { name: 'NetworkTxCbor' } }
    /**
     * Find zero or one NetworkTxCbor that matches the filter.
     * @param {NetworkTxCborFindUniqueArgs} args - Arguments to find a NetworkTxCbor
     * @example
     * // Get one NetworkTxCbor
     * const networkTxCbor = await prisma.networkTxCbor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NetworkTxCborFindUniqueArgs>(args: SelectSubset<T, NetworkTxCborFindUniqueArgs<ExtArgs>>): Prisma__NetworkTxCborClient<$Result.GetResult<Prisma.$NetworkTxCborPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one NetworkTxCbor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NetworkTxCborFindUniqueOrThrowArgs} args - Arguments to find a NetworkTxCbor
     * @example
     * // Get one NetworkTxCbor
     * const networkTxCbor = await prisma.networkTxCbor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NetworkTxCborFindUniqueOrThrowArgs>(args: SelectSubset<T, NetworkTxCborFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NetworkTxCborClient<$Result.GetResult<Prisma.$NetworkTxCborPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NetworkTxCbor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NetworkTxCborFindFirstArgs} args - Arguments to find a NetworkTxCbor
     * @example
     * // Get one NetworkTxCbor
     * const networkTxCbor = await prisma.networkTxCbor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NetworkTxCborFindFirstArgs>(args?: SelectSubset<T, NetworkTxCborFindFirstArgs<ExtArgs>>): Prisma__NetworkTxCborClient<$Result.GetResult<Prisma.$NetworkTxCborPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NetworkTxCbor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NetworkTxCborFindFirstOrThrowArgs} args - Arguments to find a NetworkTxCbor
     * @example
     * // Get one NetworkTxCbor
     * const networkTxCbor = await prisma.networkTxCbor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NetworkTxCborFindFirstOrThrowArgs>(args?: SelectSubset<T, NetworkTxCborFindFirstOrThrowArgs<ExtArgs>>): Prisma__NetworkTxCborClient<$Result.GetResult<Prisma.$NetworkTxCborPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more NetworkTxCbors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NetworkTxCborFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NetworkTxCbors
     * const networkTxCbors = await prisma.networkTxCbor.findMany()
     * 
     * // Get first 10 NetworkTxCbors
     * const networkTxCbors = await prisma.networkTxCbor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const networkTxCborWithIdOnly = await prisma.networkTxCbor.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NetworkTxCborFindManyArgs>(args?: SelectSubset<T, NetworkTxCborFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NetworkTxCborPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a NetworkTxCbor.
     * @param {NetworkTxCborCreateArgs} args - Arguments to create a NetworkTxCbor.
     * @example
     * // Create one NetworkTxCbor
     * const NetworkTxCbor = await prisma.networkTxCbor.create({
     *   data: {
     *     // ... data to create a NetworkTxCbor
     *   }
     * })
     * 
     */
    create<T extends NetworkTxCborCreateArgs>(args: SelectSubset<T, NetworkTxCborCreateArgs<ExtArgs>>): Prisma__NetworkTxCborClient<$Result.GetResult<Prisma.$NetworkTxCborPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many NetworkTxCbors.
     * @param {NetworkTxCborCreateManyArgs} args - Arguments to create many NetworkTxCbors.
     * @example
     * // Create many NetworkTxCbors
     * const networkTxCbor = await prisma.networkTxCbor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NetworkTxCborCreateManyArgs>(args?: SelectSubset<T, NetworkTxCborCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many NetworkTxCbors and returns the data saved in the database.
     * @param {NetworkTxCborCreateManyAndReturnArgs} args - Arguments to create many NetworkTxCbors.
     * @example
     * // Create many NetworkTxCbors
     * const networkTxCbor = await prisma.networkTxCbor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many NetworkTxCbors and only return the `id`
     * const networkTxCborWithIdOnly = await prisma.networkTxCbor.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NetworkTxCborCreateManyAndReturnArgs>(args?: SelectSubset<T, NetworkTxCborCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NetworkTxCborPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a NetworkTxCbor.
     * @param {NetworkTxCborDeleteArgs} args - Arguments to delete one NetworkTxCbor.
     * @example
     * // Delete one NetworkTxCbor
     * const NetworkTxCbor = await prisma.networkTxCbor.delete({
     *   where: {
     *     // ... filter to delete one NetworkTxCbor
     *   }
     * })
     * 
     */
    delete<T extends NetworkTxCborDeleteArgs>(args: SelectSubset<T, NetworkTxCborDeleteArgs<ExtArgs>>): Prisma__NetworkTxCborClient<$Result.GetResult<Prisma.$NetworkTxCborPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one NetworkTxCbor.
     * @param {NetworkTxCborUpdateArgs} args - Arguments to update one NetworkTxCbor.
     * @example
     * // Update one NetworkTxCbor
     * const networkTxCbor = await prisma.networkTxCbor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NetworkTxCborUpdateArgs>(args: SelectSubset<T, NetworkTxCborUpdateArgs<ExtArgs>>): Prisma__NetworkTxCborClient<$Result.GetResult<Prisma.$NetworkTxCborPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more NetworkTxCbors.
     * @param {NetworkTxCborDeleteManyArgs} args - Arguments to filter NetworkTxCbors to delete.
     * @example
     * // Delete a few NetworkTxCbors
     * const { count } = await prisma.networkTxCbor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NetworkTxCborDeleteManyArgs>(args?: SelectSubset<T, NetworkTxCborDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NetworkTxCbors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NetworkTxCborUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NetworkTxCbors
     * const networkTxCbor = await prisma.networkTxCbor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NetworkTxCborUpdateManyArgs>(args: SelectSubset<T, NetworkTxCborUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NetworkTxCbors and returns the data updated in the database.
     * @param {NetworkTxCborUpdateManyAndReturnArgs} args - Arguments to update many NetworkTxCbors.
     * @example
     * // Update many NetworkTxCbors
     * const networkTxCbor = await prisma.networkTxCbor.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more NetworkTxCbors and only return the `id`
     * const networkTxCborWithIdOnly = await prisma.networkTxCbor.updateManyAndReturn({
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
    updateManyAndReturn<T extends NetworkTxCborUpdateManyAndReturnArgs>(args: SelectSubset<T, NetworkTxCborUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NetworkTxCborPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one NetworkTxCbor.
     * @param {NetworkTxCborUpsertArgs} args - Arguments to update or create a NetworkTxCbor.
     * @example
     * // Update or create a NetworkTxCbor
     * const networkTxCbor = await prisma.networkTxCbor.upsert({
     *   create: {
     *     // ... data to create a NetworkTxCbor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NetworkTxCbor we want to update
     *   }
     * })
     */
    upsert<T extends NetworkTxCborUpsertArgs>(args: SelectSubset<T, NetworkTxCborUpsertArgs<ExtArgs>>): Prisma__NetworkTxCborClient<$Result.GetResult<Prisma.$NetworkTxCborPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of NetworkTxCbors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NetworkTxCborCountArgs} args - Arguments to filter NetworkTxCbors to count.
     * @example
     * // Count the number of NetworkTxCbors
     * const count = await prisma.networkTxCbor.count({
     *   where: {
     *     // ... the filter for the NetworkTxCbors we want to count
     *   }
     * })
    **/
    count<T extends NetworkTxCborCountArgs>(
      args?: Subset<T, NetworkTxCborCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NetworkTxCborCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NetworkTxCbor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NetworkTxCborAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NetworkTxCborAggregateArgs>(args: Subset<T, NetworkTxCborAggregateArgs>): Prisma.PrismaPromise<GetNetworkTxCborAggregateType<T>>

    /**
     * Group by NetworkTxCbor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NetworkTxCborGroupByArgs} args - Group by arguments.
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
      T extends NetworkTxCborGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NetworkTxCborGroupByArgs['orderBy'] }
        : { orderBy?: NetworkTxCborGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NetworkTxCborGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNetworkTxCborGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NetworkTxCbor model
   */
  readonly fields: NetworkTxCborFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NetworkTxCbor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NetworkTxCborClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the NetworkTxCbor model
   */
  interface NetworkTxCborFieldRefs {
    readonly id: FieldRef<"NetworkTxCbor", 'Int'>
    readonly txHash: FieldRef<"NetworkTxCbor", 'String'>
    readonly cbor: FieldRef<"NetworkTxCbor", 'String'>
    readonly validator: FieldRef<"NetworkTxCbor", 'NetworkValidator'>
    readonly createdAt: FieldRef<"NetworkTxCbor", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * NetworkTxCbor findUnique
   */
  export type NetworkTxCborFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NetworkTxCbor
     */
    select?: NetworkTxCborSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NetworkTxCbor
     */
    omit?: NetworkTxCborOmit<ExtArgs> | null
    /**
     * Filter, which NetworkTxCbor to fetch.
     */
    where: NetworkTxCborWhereUniqueInput
  }

  /**
   * NetworkTxCbor findUniqueOrThrow
   */
  export type NetworkTxCborFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NetworkTxCbor
     */
    select?: NetworkTxCborSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NetworkTxCbor
     */
    omit?: NetworkTxCborOmit<ExtArgs> | null
    /**
     * Filter, which NetworkTxCbor to fetch.
     */
    where: NetworkTxCborWhereUniqueInput
  }

  /**
   * NetworkTxCbor findFirst
   */
  export type NetworkTxCborFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NetworkTxCbor
     */
    select?: NetworkTxCborSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NetworkTxCbor
     */
    omit?: NetworkTxCborOmit<ExtArgs> | null
    /**
     * Filter, which NetworkTxCbor to fetch.
     */
    where?: NetworkTxCborWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NetworkTxCbors to fetch.
     */
    orderBy?: NetworkTxCborOrderByWithRelationInput | NetworkTxCborOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NetworkTxCbors.
     */
    cursor?: NetworkTxCborWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NetworkTxCbors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NetworkTxCbors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NetworkTxCbors.
     */
    distinct?: NetworkTxCborScalarFieldEnum | NetworkTxCborScalarFieldEnum[]
  }

  /**
   * NetworkTxCbor findFirstOrThrow
   */
  export type NetworkTxCborFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NetworkTxCbor
     */
    select?: NetworkTxCborSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NetworkTxCbor
     */
    omit?: NetworkTxCborOmit<ExtArgs> | null
    /**
     * Filter, which NetworkTxCbor to fetch.
     */
    where?: NetworkTxCborWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NetworkTxCbors to fetch.
     */
    orderBy?: NetworkTxCborOrderByWithRelationInput | NetworkTxCborOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NetworkTxCbors.
     */
    cursor?: NetworkTxCborWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NetworkTxCbors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NetworkTxCbors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NetworkTxCbors.
     */
    distinct?: NetworkTxCborScalarFieldEnum | NetworkTxCborScalarFieldEnum[]
  }

  /**
   * NetworkTxCbor findMany
   */
  export type NetworkTxCborFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NetworkTxCbor
     */
    select?: NetworkTxCborSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NetworkTxCbor
     */
    omit?: NetworkTxCborOmit<ExtArgs> | null
    /**
     * Filter, which NetworkTxCbors to fetch.
     */
    where?: NetworkTxCborWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NetworkTxCbors to fetch.
     */
    orderBy?: NetworkTxCborOrderByWithRelationInput | NetworkTxCborOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NetworkTxCbors.
     */
    cursor?: NetworkTxCborWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NetworkTxCbors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NetworkTxCbors.
     */
    skip?: number
    distinct?: NetworkTxCborScalarFieldEnum | NetworkTxCborScalarFieldEnum[]
  }

  /**
   * NetworkTxCbor create
   */
  export type NetworkTxCborCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NetworkTxCbor
     */
    select?: NetworkTxCborSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NetworkTxCbor
     */
    omit?: NetworkTxCborOmit<ExtArgs> | null
    /**
     * The data needed to create a NetworkTxCbor.
     */
    data: XOR<NetworkTxCborCreateInput, NetworkTxCborUncheckedCreateInput>
  }

  /**
   * NetworkTxCbor createMany
   */
  export type NetworkTxCborCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NetworkTxCbors.
     */
    data: NetworkTxCborCreateManyInput | NetworkTxCborCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NetworkTxCbor createManyAndReturn
   */
  export type NetworkTxCborCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NetworkTxCbor
     */
    select?: NetworkTxCborSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NetworkTxCbor
     */
    omit?: NetworkTxCborOmit<ExtArgs> | null
    /**
     * The data used to create many NetworkTxCbors.
     */
    data: NetworkTxCborCreateManyInput | NetworkTxCborCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NetworkTxCbor update
   */
  export type NetworkTxCborUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NetworkTxCbor
     */
    select?: NetworkTxCborSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NetworkTxCbor
     */
    omit?: NetworkTxCborOmit<ExtArgs> | null
    /**
     * The data needed to update a NetworkTxCbor.
     */
    data: XOR<NetworkTxCborUpdateInput, NetworkTxCborUncheckedUpdateInput>
    /**
     * Choose, which NetworkTxCbor to update.
     */
    where: NetworkTxCborWhereUniqueInput
  }

  /**
   * NetworkTxCbor updateMany
   */
  export type NetworkTxCborUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NetworkTxCbors.
     */
    data: XOR<NetworkTxCborUpdateManyMutationInput, NetworkTxCborUncheckedUpdateManyInput>
    /**
     * Filter which NetworkTxCbors to update
     */
    where?: NetworkTxCborWhereInput
    /**
     * Limit how many NetworkTxCbors to update.
     */
    limit?: number
  }

  /**
   * NetworkTxCbor updateManyAndReturn
   */
  export type NetworkTxCborUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NetworkTxCbor
     */
    select?: NetworkTxCborSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NetworkTxCbor
     */
    omit?: NetworkTxCborOmit<ExtArgs> | null
    /**
     * The data used to update NetworkTxCbors.
     */
    data: XOR<NetworkTxCborUpdateManyMutationInput, NetworkTxCborUncheckedUpdateManyInput>
    /**
     * Filter which NetworkTxCbors to update
     */
    where?: NetworkTxCborWhereInput
    /**
     * Limit how many NetworkTxCbors to update.
     */
    limit?: number
  }

  /**
   * NetworkTxCbor upsert
   */
  export type NetworkTxCborUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NetworkTxCbor
     */
    select?: NetworkTxCborSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NetworkTxCbor
     */
    omit?: NetworkTxCborOmit<ExtArgs> | null
    /**
     * The filter to search for the NetworkTxCbor to update in case it exists.
     */
    where: NetworkTxCborWhereUniqueInput
    /**
     * In case the NetworkTxCbor found by the `where` argument doesn't exist, create a new NetworkTxCbor with this data.
     */
    create: XOR<NetworkTxCborCreateInput, NetworkTxCborUncheckedCreateInput>
    /**
     * In case the NetworkTxCbor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NetworkTxCborUpdateInput, NetworkTxCborUncheckedUpdateInput>
  }

  /**
   * NetworkTxCbor delete
   */
  export type NetworkTxCborDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NetworkTxCbor
     */
    select?: NetworkTxCborSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NetworkTxCbor
     */
    omit?: NetworkTxCborOmit<ExtArgs> | null
    /**
     * Filter which NetworkTxCbor to delete.
     */
    where: NetworkTxCborWhereUniqueInput
  }

  /**
   * NetworkTxCbor deleteMany
   */
  export type NetworkTxCborDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NetworkTxCbors to delete
     */
    where?: NetworkTxCborWhereInput
    /**
     * Limit how many NetworkTxCbors to delete.
     */
    limit?: number
  }

  /**
   * NetworkTxCbor without action
   */
  export type NetworkTxCborDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NetworkTxCbor
     */
    select?: NetworkTxCborSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NetworkTxCbor
     */
    omit?: NetworkTxCborOmit<ExtArgs> | null
  }


  /**
   * Model NetworkTxOutput
   */

  export type AggregateNetworkTxOutput = {
    _count: NetworkTxOutputCountAggregateOutputType | null
    _avg: NetworkTxOutputAvgAggregateOutputType | null
    _sum: NetworkTxOutputSumAggregateOutputType | null
    _min: NetworkTxOutputMinAggregateOutputType | null
    _max: NetworkTxOutputMaxAggregateOutputType | null
  }

  export type NetworkTxOutputAvgAggregateOutputType = {
    id: number | null
    utxoId: number | null
  }

  export type NetworkTxOutputSumAggregateOutputType = {
    id: number | null
    utxoId: number | null
  }

  export type NetworkTxOutputMinAggregateOutputType = {
    id: number | null
    utxoId: number | null
    validator: $Enums.NetworkValidator | null
    createdAt: Date | null
  }

  export type NetworkTxOutputMaxAggregateOutputType = {
    id: number | null
    utxoId: number | null
    validator: $Enums.NetworkValidator | null
    createdAt: Date | null
  }

  export type NetworkTxOutputCountAggregateOutputType = {
    id: number
    utxoId: number
    validator: number
    createdAt: number
    _all: number
  }


  export type NetworkTxOutputAvgAggregateInputType = {
    id?: true
    utxoId?: true
  }

  export type NetworkTxOutputSumAggregateInputType = {
    id?: true
    utxoId?: true
  }

  export type NetworkTxOutputMinAggregateInputType = {
    id?: true
    utxoId?: true
    validator?: true
    createdAt?: true
  }

  export type NetworkTxOutputMaxAggregateInputType = {
    id?: true
    utxoId?: true
    validator?: true
    createdAt?: true
  }

  export type NetworkTxOutputCountAggregateInputType = {
    id?: true
    utxoId?: true
    validator?: true
    createdAt?: true
    _all?: true
  }

  export type NetworkTxOutputAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NetworkTxOutput to aggregate.
     */
    where?: NetworkTxOutputWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NetworkTxOutputs to fetch.
     */
    orderBy?: NetworkTxOutputOrderByWithRelationInput | NetworkTxOutputOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NetworkTxOutputWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NetworkTxOutputs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NetworkTxOutputs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NetworkTxOutputs
    **/
    _count?: true | NetworkTxOutputCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NetworkTxOutputAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NetworkTxOutputSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NetworkTxOutputMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NetworkTxOutputMaxAggregateInputType
  }

  export type GetNetworkTxOutputAggregateType<T extends NetworkTxOutputAggregateArgs> = {
        [P in keyof T & keyof AggregateNetworkTxOutput]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNetworkTxOutput[P]>
      : GetScalarType<T[P], AggregateNetworkTxOutput[P]>
  }




  export type NetworkTxOutputGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NetworkTxOutputWhereInput
    orderBy?: NetworkTxOutputOrderByWithAggregationInput | NetworkTxOutputOrderByWithAggregationInput[]
    by: NetworkTxOutputScalarFieldEnum[] | NetworkTxOutputScalarFieldEnum
    having?: NetworkTxOutputScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NetworkTxOutputCountAggregateInputType | true
    _avg?: NetworkTxOutputAvgAggregateInputType
    _sum?: NetworkTxOutputSumAggregateInputType
    _min?: NetworkTxOutputMinAggregateInputType
    _max?: NetworkTxOutputMaxAggregateInputType
  }

  export type NetworkTxOutputGroupByOutputType = {
    id: number
    utxoId: number
    validator: $Enums.NetworkValidator
    createdAt: Date
    _count: NetworkTxOutputCountAggregateOutputType | null
    _avg: NetworkTxOutputAvgAggregateOutputType | null
    _sum: NetworkTxOutputSumAggregateOutputType | null
    _min: NetworkTxOutputMinAggregateOutputType | null
    _max: NetworkTxOutputMaxAggregateOutputType | null
  }

  type GetNetworkTxOutputGroupByPayload<T extends NetworkTxOutputGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NetworkTxOutputGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NetworkTxOutputGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NetworkTxOutputGroupByOutputType[P]>
            : GetScalarType<T[P], NetworkTxOutputGroupByOutputType[P]>
        }
      >
    >


  export type NetworkTxOutputSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    utxoId?: boolean
    validator?: boolean
    createdAt?: boolean
    utxo?: boolean | UtxoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["networkTxOutput"]>

  export type NetworkTxOutputSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    utxoId?: boolean
    validator?: boolean
    createdAt?: boolean
    utxo?: boolean | UtxoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["networkTxOutput"]>

  export type NetworkTxOutputSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    utxoId?: boolean
    validator?: boolean
    createdAt?: boolean
    utxo?: boolean | UtxoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["networkTxOutput"]>

  export type NetworkTxOutputSelectScalar = {
    id?: boolean
    utxoId?: boolean
    validator?: boolean
    createdAt?: boolean
  }

  export type NetworkTxOutputOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "utxoId" | "validator" | "createdAt", ExtArgs["result"]["networkTxOutput"]>
  export type NetworkTxOutputInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    utxo?: boolean | UtxoDefaultArgs<ExtArgs>
  }
  export type NetworkTxOutputIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    utxo?: boolean | UtxoDefaultArgs<ExtArgs>
  }
  export type NetworkTxOutputIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    utxo?: boolean | UtxoDefaultArgs<ExtArgs>
  }

  export type $NetworkTxOutputPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NetworkTxOutput"
    objects: {
      utxo: Prisma.$UtxoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      utxoId: number
      validator: $Enums.NetworkValidator
      createdAt: Date
    }, ExtArgs["result"]["networkTxOutput"]>
    composites: {}
  }

  type NetworkTxOutputGetPayload<S extends boolean | null | undefined | NetworkTxOutputDefaultArgs> = $Result.GetResult<Prisma.$NetworkTxOutputPayload, S>

  type NetworkTxOutputCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NetworkTxOutputFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NetworkTxOutputCountAggregateInputType | true
    }

  export interface NetworkTxOutputDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NetworkTxOutput'], meta: { name: 'NetworkTxOutput' } }
    /**
     * Find zero or one NetworkTxOutput that matches the filter.
     * @param {NetworkTxOutputFindUniqueArgs} args - Arguments to find a NetworkTxOutput
     * @example
     * // Get one NetworkTxOutput
     * const networkTxOutput = await prisma.networkTxOutput.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NetworkTxOutputFindUniqueArgs>(args: SelectSubset<T, NetworkTxOutputFindUniqueArgs<ExtArgs>>): Prisma__NetworkTxOutputClient<$Result.GetResult<Prisma.$NetworkTxOutputPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one NetworkTxOutput that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NetworkTxOutputFindUniqueOrThrowArgs} args - Arguments to find a NetworkTxOutput
     * @example
     * // Get one NetworkTxOutput
     * const networkTxOutput = await prisma.networkTxOutput.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NetworkTxOutputFindUniqueOrThrowArgs>(args: SelectSubset<T, NetworkTxOutputFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NetworkTxOutputClient<$Result.GetResult<Prisma.$NetworkTxOutputPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NetworkTxOutput that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NetworkTxOutputFindFirstArgs} args - Arguments to find a NetworkTxOutput
     * @example
     * // Get one NetworkTxOutput
     * const networkTxOutput = await prisma.networkTxOutput.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NetworkTxOutputFindFirstArgs>(args?: SelectSubset<T, NetworkTxOutputFindFirstArgs<ExtArgs>>): Prisma__NetworkTxOutputClient<$Result.GetResult<Prisma.$NetworkTxOutputPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NetworkTxOutput that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NetworkTxOutputFindFirstOrThrowArgs} args - Arguments to find a NetworkTxOutput
     * @example
     * // Get one NetworkTxOutput
     * const networkTxOutput = await prisma.networkTxOutput.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NetworkTxOutputFindFirstOrThrowArgs>(args?: SelectSubset<T, NetworkTxOutputFindFirstOrThrowArgs<ExtArgs>>): Prisma__NetworkTxOutputClient<$Result.GetResult<Prisma.$NetworkTxOutputPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more NetworkTxOutputs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NetworkTxOutputFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NetworkTxOutputs
     * const networkTxOutputs = await prisma.networkTxOutput.findMany()
     * 
     * // Get first 10 NetworkTxOutputs
     * const networkTxOutputs = await prisma.networkTxOutput.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const networkTxOutputWithIdOnly = await prisma.networkTxOutput.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NetworkTxOutputFindManyArgs>(args?: SelectSubset<T, NetworkTxOutputFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NetworkTxOutputPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a NetworkTxOutput.
     * @param {NetworkTxOutputCreateArgs} args - Arguments to create a NetworkTxOutput.
     * @example
     * // Create one NetworkTxOutput
     * const NetworkTxOutput = await prisma.networkTxOutput.create({
     *   data: {
     *     // ... data to create a NetworkTxOutput
     *   }
     * })
     * 
     */
    create<T extends NetworkTxOutputCreateArgs>(args: SelectSubset<T, NetworkTxOutputCreateArgs<ExtArgs>>): Prisma__NetworkTxOutputClient<$Result.GetResult<Prisma.$NetworkTxOutputPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many NetworkTxOutputs.
     * @param {NetworkTxOutputCreateManyArgs} args - Arguments to create many NetworkTxOutputs.
     * @example
     * // Create many NetworkTxOutputs
     * const networkTxOutput = await prisma.networkTxOutput.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NetworkTxOutputCreateManyArgs>(args?: SelectSubset<T, NetworkTxOutputCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many NetworkTxOutputs and returns the data saved in the database.
     * @param {NetworkTxOutputCreateManyAndReturnArgs} args - Arguments to create many NetworkTxOutputs.
     * @example
     * // Create many NetworkTxOutputs
     * const networkTxOutput = await prisma.networkTxOutput.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many NetworkTxOutputs and only return the `id`
     * const networkTxOutputWithIdOnly = await prisma.networkTxOutput.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NetworkTxOutputCreateManyAndReturnArgs>(args?: SelectSubset<T, NetworkTxOutputCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NetworkTxOutputPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a NetworkTxOutput.
     * @param {NetworkTxOutputDeleteArgs} args - Arguments to delete one NetworkTxOutput.
     * @example
     * // Delete one NetworkTxOutput
     * const NetworkTxOutput = await prisma.networkTxOutput.delete({
     *   where: {
     *     // ... filter to delete one NetworkTxOutput
     *   }
     * })
     * 
     */
    delete<T extends NetworkTxOutputDeleteArgs>(args: SelectSubset<T, NetworkTxOutputDeleteArgs<ExtArgs>>): Prisma__NetworkTxOutputClient<$Result.GetResult<Prisma.$NetworkTxOutputPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one NetworkTxOutput.
     * @param {NetworkTxOutputUpdateArgs} args - Arguments to update one NetworkTxOutput.
     * @example
     * // Update one NetworkTxOutput
     * const networkTxOutput = await prisma.networkTxOutput.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NetworkTxOutputUpdateArgs>(args: SelectSubset<T, NetworkTxOutputUpdateArgs<ExtArgs>>): Prisma__NetworkTxOutputClient<$Result.GetResult<Prisma.$NetworkTxOutputPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more NetworkTxOutputs.
     * @param {NetworkTxOutputDeleteManyArgs} args - Arguments to filter NetworkTxOutputs to delete.
     * @example
     * // Delete a few NetworkTxOutputs
     * const { count } = await prisma.networkTxOutput.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NetworkTxOutputDeleteManyArgs>(args?: SelectSubset<T, NetworkTxOutputDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NetworkTxOutputs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NetworkTxOutputUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NetworkTxOutputs
     * const networkTxOutput = await prisma.networkTxOutput.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NetworkTxOutputUpdateManyArgs>(args: SelectSubset<T, NetworkTxOutputUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NetworkTxOutputs and returns the data updated in the database.
     * @param {NetworkTxOutputUpdateManyAndReturnArgs} args - Arguments to update many NetworkTxOutputs.
     * @example
     * // Update many NetworkTxOutputs
     * const networkTxOutput = await prisma.networkTxOutput.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more NetworkTxOutputs and only return the `id`
     * const networkTxOutputWithIdOnly = await prisma.networkTxOutput.updateManyAndReturn({
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
    updateManyAndReturn<T extends NetworkTxOutputUpdateManyAndReturnArgs>(args: SelectSubset<T, NetworkTxOutputUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NetworkTxOutputPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one NetworkTxOutput.
     * @param {NetworkTxOutputUpsertArgs} args - Arguments to update or create a NetworkTxOutput.
     * @example
     * // Update or create a NetworkTxOutput
     * const networkTxOutput = await prisma.networkTxOutput.upsert({
     *   create: {
     *     // ... data to create a NetworkTxOutput
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NetworkTxOutput we want to update
     *   }
     * })
     */
    upsert<T extends NetworkTxOutputUpsertArgs>(args: SelectSubset<T, NetworkTxOutputUpsertArgs<ExtArgs>>): Prisma__NetworkTxOutputClient<$Result.GetResult<Prisma.$NetworkTxOutputPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of NetworkTxOutputs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NetworkTxOutputCountArgs} args - Arguments to filter NetworkTxOutputs to count.
     * @example
     * // Count the number of NetworkTxOutputs
     * const count = await prisma.networkTxOutput.count({
     *   where: {
     *     // ... the filter for the NetworkTxOutputs we want to count
     *   }
     * })
    **/
    count<T extends NetworkTxOutputCountArgs>(
      args?: Subset<T, NetworkTxOutputCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NetworkTxOutputCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NetworkTxOutput.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NetworkTxOutputAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NetworkTxOutputAggregateArgs>(args: Subset<T, NetworkTxOutputAggregateArgs>): Prisma.PrismaPromise<GetNetworkTxOutputAggregateType<T>>

    /**
     * Group by NetworkTxOutput.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NetworkTxOutputGroupByArgs} args - Group by arguments.
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
      T extends NetworkTxOutputGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NetworkTxOutputGroupByArgs['orderBy'] }
        : { orderBy?: NetworkTxOutputGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NetworkTxOutputGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNetworkTxOutputGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NetworkTxOutput model
   */
  readonly fields: NetworkTxOutputFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NetworkTxOutput.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NetworkTxOutputClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    utxo<T extends UtxoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UtxoDefaultArgs<ExtArgs>>): Prisma__UtxoClient<$Result.GetResult<Prisma.$UtxoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the NetworkTxOutput model
   */
  interface NetworkTxOutputFieldRefs {
    readonly id: FieldRef<"NetworkTxOutput", 'Int'>
    readonly utxoId: FieldRef<"NetworkTxOutput", 'Int'>
    readonly validator: FieldRef<"NetworkTxOutput", 'NetworkValidator'>
    readonly createdAt: FieldRef<"NetworkTxOutput", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * NetworkTxOutput findUnique
   */
  export type NetworkTxOutputFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NetworkTxOutput
     */
    select?: NetworkTxOutputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NetworkTxOutput
     */
    omit?: NetworkTxOutputOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NetworkTxOutputInclude<ExtArgs> | null
    /**
     * Filter, which NetworkTxOutput to fetch.
     */
    where: NetworkTxOutputWhereUniqueInput
  }

  /**
   * NetworkTxOutput findUniqueOrThrow
   */
  export type NetworkTxOutputFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NetworkTxOutput
     */
    select?: NetworkTxOutputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NetworkTxOutput
     */
    omit?: NetworkTxOutputOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NetworkTxOutputInclude<ExtArgs> | null
    /**
     * Filter, which NetworkTxOutput to fetch.
     */
    where: NetworkTxOutputWhereUniqueInput
  }

  /**
   * NetworkTxOutput findFirst
   */
  export type NetworkTxOutputFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NetworkTxOutput
     */
    select?: NetworkTxOutputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NetworkTxOutput
     */
    omit?: NetworkTxOutputOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NetworkTxOutputInclude<ExtArgs> | null
    /**
     * Filter, which NetworkTxOutput to fetch.
     */
    where?: NetworkTxOutputWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NetworkTxOutputs to fetch.
     */
    orderBy?: NetworkTxOutputOrderByWithRelationInput | NetworkTxOutputOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NetworkTxOutputs.
     */
    cursor?: NetworkTxOutputWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NetworkTxOutputs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NetworkTxOutputs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NetworkTxOutputs.
     */
    distinct?: NetworkTxOutputScalarFieldEnum | NetworkTxOutputScalarFieldEnum[]
  }

  /**
   * NetworkTxOutput findFirstOrThrow
   */
  export type NetworkTxOutputFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NetworkTxOutput
     */
    select?: NetworkTxOutputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NetworkTxOutput
     */
    omit?: NetworkTxOutputOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NetworkTxOutputInclude<ExtArgs> | null
    /**
     * Filter, which NetworkTxOutput to fetch.
     */
    where?: NetworkTxOutputWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NetworkTxOutputs to fetch.
     */
    orderBy?: NetworkTxOutputOrderByWithRelationInput | NetworkTxOutputOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NetworkTxOutputs.
     */
    cursor?: NetworkTxOutputWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NetworkTxOutputs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NetworkTxOutputs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NetworkTxOutputs.
     */
    distinct?: NetworkTxOutputScalarFieldEnum | NetworkTxOutputScalarFieldEnum[]
  }

  /**
   * NetworkTxOutput findMany
   */
  export type NetworkTxOutputFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NetworkTxOutput
     */
    select?: NetworkTxOutputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NetworkTxOutput
     */
    omit?: NetworkTxOutputOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NetworkTxOutputInclude<ExtArgs> | null
    /**
     * Filter, which NetworkTxOutputs to fetch.
     */
    where?: NetworkTxOutputWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NetworkTxOutputs to fetch.
     */
    orderBy?: NetworkTxOutputOrderByWithRelationInput | NetworkTxOutputOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NetworkTxOutputs.
     */
    cursor?: NetworkTxOutputWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NetworkTxOutputs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NetworkTxOutputs.
     */
    skip?: number
    distinct?: NetworkTxOutputScalarFieldEnum | NetworkTxOutputScalarFieldEnum[]
  }

  /**
   * NetworkTxOutput create
   */
  export type NetworkTxOutputCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NetworkTxOutput
     */
    select?: NetworkTxOutputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NetworkTxOutput
     */
    omit?: NetworkTxOutputOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NetworkTxOutputInclude<ExtArgs> | null
    /**
     * The data needed to create a NetworkTxOutput.
     */
    data: XOR<NetworkTxOutputCreateInput, NetworkTxOutputUncheckedCreateInput>
  }

  /**
   * NetworkTxOutput createMany
   */
  export type NetworkTxOutputCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NetworkTxOutputs.
     */
    data: NetworkTxOutputCreateManyInput | NetworkTxOutputCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NetworkTxOutput createManyAndReturn
   */
  export type NetworkTxOutputCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NetworkTxOutput
     */
    select?: NetworkTxOutputSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NetworkTxOutput
     */
    omit?: NetworkTxOutputOmit<ExtArgs> | null
    /**
     * The data used to create many NetworkTxOutputs.
     */
    data: NetworkTxOutputCreateManyInput | NetworkTxOutputCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NetworkTxOutputIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * NetworkTxOutput update
   */
  export type NetworkTxOutputUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NetworkTxOutput
     */
    select?: NetworkTxOutputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NetworkTxOutput
     */
    omit?: NetworkTxOutputOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NetworkTxOutputInclude<ExtArgs> | null
    /**
     * The data needed to update a NetworkTxOutput.
     */
    data: XOR<NetworkTxOutputUpdateInput, NetworkTxOutputUncheckedUpdateInput>
    /**
     * Choose, which NetworkTxOutput to update.
     */
    where: NetworkTxOutputWhereUniqueInput
  }

  /**
   * NetworkTxOutput updateMany
   */
  export type NetworkTxOutputUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NetworkTxOutputs.
     */
    data: XOR<NetworkTxOutputUpdateManyMutationInput, NetworkTxOutputUncheckedUpdateManyInput>
    /**
     * Filter which NetworkTxOutputs to update
     */
    where?: NetworkTxOutputWhereInput
    /**
     * Limit how many NetworkTxOutputs to update.
     */
    limit?: number
  }

  /**
   * NetworkTxOutput updateManyAndReturn
   */
  export type NetworkTxOutputUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NetworkTxOutput
     */
    select?: NetworkTxOutputSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NetworkTxOutput
     */
    omit?: NetworkTxOutputOmit<ExtArgs> | null
    /**
     * The data used to update NetworkTxOutputs.
     */
    data: XOR<NetworkTxOutputUpdateManyMutationInput, NetworkTxOutputUncheckedUpdateManyInput>
    /**
     * Filter which NetworkTxOutputs to update
     */
    where?: NetworkTxOutputWhereInput
    /**
     * Limit how many NetworkTxOutputs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NetworkTxOutputIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * NetworkTxOutput upsert
   */
  export type NetworkTxOutputUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NetworkTxOutput
     */
    select?: NetworkTxOutputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NetworkTxOutput
     */
    omit?: NetworkTxOutputOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NetworkTxOutputInclude<ExtArgs> | null
    /**
     * The filter to search for the NetworkTxOutput to update in case it exists.
     */
    where: NetworkTxOutputWhereUniqueInput
    /**
     * In case the NetworkTxOutput found by the `where` argument doesn't exist, create a new NetworkTxOutput with this data.
     */
    create: XOR<NetworkTxOutputCreateInput, NetworkTxOutputUncheckedCreateInput>
    /**
     * In case the NetworkTxOutput was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NetworkTxOutputUpdateInput, NetworkTxOutputUncheckedUpdateInput>
  }

  /**
   * NetworkTxOutput delete
   */
  export type NetworkTxOutputDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NetworkTxOutput
     */
    select?: NetworkTxOutputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NetworkTxOutput
     */
    omit?: NetworkTxOutputOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NetworkTxOutputInclude<ExtArgs> | null
    /**
     * Filter which NetworkTxOutput to delete.
     */
    where: NetworkTxOutputWhereUniqueInput
  }

  /**
   * NetworkTxOutput deleteMany
   */
  export type NetworkTxOutputDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NetworkTxOutputs to delete
     */
    where?: NetworkTxOutputWhereInput
    /**
     * Limit how many NetworkTxOutputs to delete.
     */
    limit?: number
  }

  /**
   * NetworkTxOutput without action
   */
  export type NetworkTxOutputDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NetworkTxOutput
     */
    select?: NetworkTxOutputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NetworkTxOutput
     */
    omit?: NetworkTxOutputOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NetworkTxOutputInclude<ExtArgs> | null
  }


  /**
   * Model Instance
   */

  export type AggregateInstance = {
    _count: InstanceCountAggregateOutputType | null
    _avg: InstanceAvgAggregateOutputType | null
    _sum: InstanceSumAggregateOutputType | null
    _min: InstanceMinAggregateOutputType | null
    _max: InstanceMaxAggregateOutputType | null
  }

  export type InstanceAvgAggregateOutputType = {
    id: number | null
    instancePolicyId: number | null
  }

  export type InstanceSumAggregateOutputType = {
    id: number | null
    instancePolicyId: number | null
  }

  export type InstanceMinAggregateOutputType = {
    id: number | null
    type: $Enums.ScriptCategory | null
    hash: string | null
    address: string | null
    instancePolicyId: number | null
    createdAt: Date | null
  }

  export type InstanceMaxAggregateOutputType = {
    id: number | null
    type: $Enums.ScriptCategory | null
    hash: string | null
    address: string | null
    instancePolicyId: number | null
    createdAt: Date | null
  }

  export type InstanceCountAggregateOutputType = {
    id: number
    type: number
    hash: number
    address: number
    instancePolicyId: number
    createdAt: number
    _all: number
  }


  export type InstanceAvgAggregateInputType = {
    id?: true
    instancePolicyId?: true
  }

  export type InstanceSumAggregateInputType = {
    id?: true
    instancePolicyId?: true
  }

  export type InstanceMinAggregateInputType = {
    id?: true
    type?: true
    hash?: true
    address?: true
    instancePolicyId?: true
    createdAt?: true
  }

  export type InstanceMaxAggregateInputType = {
    id?: true
    type?: true
    hash?: true
    address?: true
    instancePolicyId?: true
    createdAt?: true
  }

  export type InstanceCountAggregateInputType = {
    id?: true
    type?: true
    hash?: true
    address?: true
    instancePolicyId?: true
    createdAt?: true
    _all?: true
  }

  export type InstanceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Instance to aggregate.
     */
    where?: InstanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Instances to fetch.
     */
    orderBy?: InstanceOrderByWithRelationInput | InstanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InstanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Instances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Instances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Instances
    **/
    _count?: true | InstanceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InstanceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InstanceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InstanceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InstanceMaxAggregateInputType
  }

  export type GetInstanceAggregateType<T extends InstanceAggregateArgs> = {
        [P in keyof T & keyof AggregateInstance]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInstance[P]>
      : GetScalarType<T[P], AggregateInstance[P]>
  }




  export type InstanceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InstanceWhereInput
    orderBy?: InstanceOrderByWithAggregationInput | InstanceOrderByWithAggregationInput[]
    by: InstanceScalarFieldEnum[] | InstanceScalarFieldEnum
    having?: InstanceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InstanceCountAggregateInputType | true
    _avg?: InstanceAvgAggregateInputType
    _sum?: InstanceSumAggregateInputType
    _min?: InstanceMinAggregateInputType
    _max?: InstanceMaxAggregateInputType
  }

  export type InstanceGroupByOutputType = {
    id: number
    type: $Enums.ScriptCategory
    hash: string
    address: string
    instancePolicyId: number
    createdAt: Date
    _count: InstanceCountAggregateOutputType | null
    _avg: InstanceAvgAggregateOutputType | null
    _sum: InstanceSumAggregateOutputType | null
    _min: InstanceMinAggregateOutputType | null
    _max: InstanceMaxAggregateOutputType | null
  }

  type GetInstanceGroupByPayload<T extends InstanceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InstanceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InstanceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InstanceGroupByOutputType[P]>
            : GetScalarType<T[P], InstanceGroupByOutputType[P]>
        }
      >
    >


  export type InstanceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    hash?: boolean
    address?: boolean
    instancePolicyId?: boolean
    createdAt?: boolean
    instancePolicy?: boolean | InstancePolicyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["instance"]>

  export type InstanceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    hash?: boolean
    address?: boolean
    instancePolicyId?: boolean
    createdAt?: boolean
    instancePolicy?: boolean | InstancePolicyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["instance"]>

  export type InstanceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    hash?: boolean
    address?: boolean
    instancePolicyId?: boolean
    createdAt?: boolean
    instancePolicy?: boolean | InstancePolicyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["instance"]>

  export type InstanceSelectScalar = {
    id?: boolean
    type?: boolean
    hash?: boolean
    address?: boolean
    instancePolicyId?: boolean
    createdAt?: boolean
  }

  export type InstanceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "hash" | "address" | "instancePolicyId" | "createdAt", ExtArgs["result"]["instance"]>
  export type InstanceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    instancePolicy?: boolean | InstancePolicyDefaultArgs<ExtArgs>
  }
  export type InstanceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    instancePolicy?: boolean | InstancePolicyDefaultArgs<ExtArgs>
  }
  export type InstanceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    instancePolicy?: boolean | InstancePolicyDefaultArgs<ExtArgs>
  }

  export type $InstancePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Instance"
    objects: {
      instancePolicy: Prisma.$InstancePolicyPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      type: $Enums.ScriptCategory
      hash: string
      address: string
      instancePolicyId: number
      createdAt: Date
    }, ExtArgs["result"]["instance"]>
    composites: {}
  }

  type InstanceGetPayload<S extends boolean | null | undefined | InstanceDefaultArgs> = $Result.GetResult<Prisma.$InstancePayload, S>

  type InstanceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InstanceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InstanceCountAggregateInputType | true
    }

  export interface InstanceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Instance'], meta: { name: 'Instance' } }
    /**
     * Find zero or one Instance that matches the filter.
     * @param {InstanceFindUniqueArgs} args - Arguments to find a Instance
     * @example
     * // Get one Instance
     * const instance = await prisma.instance.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InstanceFindUniqueArgs>(args: SelectSubset<T, InstanceFindUniqueArgs<ExtArgs>>): Prisma__InstanceClient<$Result.GetResult<Prisma.$InstancePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Instance that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InstanceFindUniqueOrThrowArgs} args - Arguments to find a Instance
     * @example
     * // Get one Instance
     * const instance = await prisma.instance.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InstanceFindUniqueOrThrowArgs>(args: SelectSubset<T, InstanceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InstanceClient<$Result.GetResult<Prisma.$InstancePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Instance that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstanceFindFirstArgs} args - Arguments to find a Instance
     * @example
     * // Get one Instance
     * const instance = await prisma.instance.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InstanceFindFirstArgs>(args?: SelectSubset<T, InstanceFindFirstArgs<ExtArgs>>): Prisma__InstanceClient<$Result.GetResult<Prisma.$InstancePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Instance that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstanceFindFirstOrThrowArgs} args - Arguments to find a Instance
     * @example
     * // Get one Instance
     * const instance = await prisma.instance.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InstanceFindFirstOrThrowArgs>(args?: SelectSubset<T, InstanceFindFirstOrThrowArgs<ExtArgs>>): Prisma__InstanceClient<$Result.GetResult<Prisma.$InstancePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Instances that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstanceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Instances
     * const instances = await prisma.instance.findMany()
     * 
     * // Get first 10 Instances
     * const instances = await prisma.instance.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const instanceWithIdOnly = await prisma.instance.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InstanceFindManyArgs>(args?: SelectSubset<T, InstanceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Instance.
     * @param {InstanceCreateArgs} args - Arguments to create a Instance.
     * @example
     * // Create one Instance
     * const Instance = await prisma.instance.create({
     *   data: {
     *     // ... data to create a Instance
     *   }
     * })
     * 
     */
    create<T extends InstanceCreateArgs>(args: SelectSubset<T, InstanceCreateArgs<ExtArgs>>): Prisma__InstanceClient<$Result.GetResult<Prisma.$InstancePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Instances.
     * @param {InstanceCreateManyArgs} args - Arguments to create many Instances.
     * @example
     * // Create many Instances
     * const instance = await prisma.instance.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InstanceCreateManyArgs>(args?: SelectSubset<T, InstanceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Instances and returns the data saved in the database.
     * @param {InstanceCreateManyAndReturnArgs} args - Arguments to create many Instances.
     * @example
     * // Create many Instances
     * const instance = await prisma.instance.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Instances and only return the `id`
     * const instanceWithIdOnly = await prisma.instance.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InstanceCreateManyAndReturnArgs>(args?: SelectSubset<T, InstanceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstancePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Instance.
     * @param {InstanceDeleteArgs} args - Arguments to delete one Instance.
     * @example
     * // Delete one Instance
     * const Instance = await prisma.instance.delete({
     *   where: {
     *     // ... filter to delete one Instance
     *   }
     * })
     * 
     */
    delete<T extends InstanceDeleteArgs>(args: SelectSubset<T, InstanceDeleteArgs<ExtArgs>>): Prisma__InstanceClient<$Result.GetResult<Prisma.$InstancePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Instance.
     * @param {InstanceUpdateArgs} args - Arguments to update one Instance.
     * @example
     * // Update one Instance
     * const instance = await prisma.instance.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InstanceUpdateArgs>(args: SelectSubset<T, InstanceUpdateArgs<ExtArgs>>): Prisma__InstanceClient<$Result.GetResult<Prisma.$InstancePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Instances.
     * @param {InstanceDeleteManyArgs} args - Arguments to filter Instances to delete.
     * @example
     * // Delete a few Instances
     * const { count } = await prisma.instance.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InstanceDeleteManyArgs>(args?: SelectSubset<T, InstanceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Instances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstanceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Instances
     * const instance = await prisma.instance.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InstanceUpdateManyArgs>(args: SelectSubset<T, InstanceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Instances and returns the data updated in the database.
     * @param {InstanceUpdateManyAndReturnArgs} args - Arguments to update many Instances.
     * @example
     * // Update many Instances
     * const instance = await prisma.instance.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Instances and only return the `id`
     * const instanceWithIdOnly = await prisma.instance.updateManyAndReturn({
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
    updateManyAndReturn<T extends InstanceUpdateManyAndReturnArgs>(args: SelectSubset<T, InstanceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstancePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Instance.
     * @param {InstanceUpsertArgs} args - Arguments to update or create a Instance.
     * @example
     * // Update or create a Instance
     * const instance = await prisma.instance.upsert({
     *   create: {
     *     // ... data to create a Instance
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Instance we want to update
     *   }
     * })
     */
    upsert<T extends InstanceUpsertArgs>(args: SelectSubset<T, InstanceUpsertArgs<ExtArgs>>): Prisma__InstanceClient<$Result.GetResult<Prisma.$InstancePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Instances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstanceCountArgs} args - Arguments to filter Instances to count.
     * @example
     * // Count the number of Instances
     * const count = await prisma.instance.count({
     *   where: {
     *     // ... the filter for the Instances we want to count
     *   }
     * })
    **/
    count<T extends InstanceCountArgs>(
      args?: Subset<T, InstanceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InstanceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Instance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstanceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InstanceAggregateArgs>(args: Subset<T, InstanceAggregateArgs>): Prisma.PrismaPromise<GetInstanceAggregateType<T>>

    /**
     * Group by Instance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstanceGroupByArgs} args - Group by arguments.
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
      T extends InstanceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InstanceGroupByArgs['orderBy'] }
        : { orderBy?: InstanceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, InstanceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInstanceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Instance model
   */
  readonly fields: InstanceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Instance.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InstanceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    instancePolicy<T extends InstancePolicyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, InstancePolicyDefaultArgs<ExtArgs>>): Prisma__InstancePolicyClient<$Result.GetResult<Prisma.$InstancePolicyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Instance model
   */
  interface InstanceFieldRefs {
    readonly id: FieldRef<"Instance", 'Int'>
    readonly type: FieldRef<"Instance", 'ScriptCategory'>
    readonly hash: FieldRef<"Instance", 'String'>
    readonly address: FieldRef<"Instance", 'String'>
    readonly instancePolicyId: FieldRef<"Instance", 'Int'>
    readonly createdAt: FieldRef<"Instance", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Instance findUnique
   */
  export type InstanceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instance
     */
    select?: InstanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instance
     */
    omit?: InstanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstanceInclude<ExtArgs> | null
    /**
     * Filter, which Instance to fetch.
     */
    where: InstanceWhereUniqueInput
  }

  /**
   * Instance findUniqueOrThrow
   */
  export type InstanceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instance
     */
    select?: InstanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instance
     */
    omit?: InstanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstanceInclude<ExtArgs> | null
    /**
     * Filter, which Instance to fetch.
     */
    where: InstanceWhereUniqueInput
  }

  /**
   * Instance findFirst
   */
  export type InstanceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instance
     */
    select?: InstanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instance
     */
    omit?: InstanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstanceInclude<ExtArgs> | null
    /**
     * Filter, which Instance to fetch.
     */
    where?: InstanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Instances to fetch.
     */
    orderBy?: InstanceOrderByWithRelationInput | InstanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Instances.
     */
    cursor?: InstanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Instances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Instances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Instances.
     */
    distinct?: InstanceScalarFieldEnum | InstanceScalarFieldEnum[]
  }

  /**
   * Instance findFirstOrThrow
   */
  export type InstanceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instance
     */
    select?: InstanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instance
     */
    omit?: InstanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstanceInclude<ExtArgs> | null
    /**
     * Filter, which Instance to fetch.
     */
    where?: InstanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Instances to fetch.
     */
    orderBy?: InstanceOrderByWithRelationInput | InstanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Instances.
     */
    cursor?: InstanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Instances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Instances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Instances.
     */
    distinct?: InstanceScalarFieldEnum | InstanceScalarFieldEnum[]
  }

  /**
   * Instance findMany
   */
  export type InstanceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instance
     */
    select?: InstanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instance
     */
    omit?: InstanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstanceInclude<ExtArgs> | null
    /**
     * Filter, which Instances to fetch.
     */
    where?: InstanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Instances to fetch.
     */
    orderBy?: InstanceOrderByWithRelationInput | InstanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Instances.
     */
    cursor?: InstanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Instances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Instances.
     */
    skip?: number
    distinct?: InstanceScalarFieldEnum | InstanceScalarFieldEnum[]
  }

  /**
   * Instance create
   */
  export type InstanceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instance
     */
    select?: InstanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instance
     */
    omit?: InstanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstanceInclude<ExtArgs> | null
    /**
     * The data needed to create a Instance.
     */
    data: XOR<InstanceCreateInput, InstanceUncheckedCreateInput>
  }

  /**
   * Instance createMany
   */
  export type InstanceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Instances.
     */
    data: InstanceCreateManyInput | InstanceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Instance createManyAndReturn
   */
  export type InstanceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instance
     */
    select?: InstanceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Instance
     */
    omit?: InstanceOmit<ExtArgs> | null
    /**
     * The data used to create many Instances.
     */
    data: InstanceCreateManyInput | InstanceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstanceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Instance update
   */
  export type InstanceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instance
     */
    select?: InstanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instance
     */
    omit?: InstanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstanceInclude<ExtArgs> | null
    /**
     * The data needed to update a Instance.
     */
    data: XOR<InstanceUpdateInput, InstanceUncheckedUpdateInput>
    /**
     * Choose, which Instance to update.
     */
    where: InstanceWhereUniqueInput
  }

  /**
   * Instance updateMany
   */
  export type InstanceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Instances.
     */
    data: XOR<InstanceUpdateManyMutationInput, InstanceUncheckedUpdateManyInput>
    /**
     * Filter which Instances to update
     */
    where?: InstanceWhereInput
    /**
     * Limit how many Instances to update.
     */
    limit?: number
  }

  /**
   * Instance updateManyAndReturn
   */
  export type InstanceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instance
     */
    select?: InstanceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Instance
     */
    omit?: InstanceOmit<ExtArgs> | null
    /**
     * The data used to update Instances.
     */
    data: XOR<InstanceUpdateManyMutationInput, InstanceUncheckedUpdateManyInput>
    /**
     * Filter which Instances to update
     */
    where?: InstanceWhereInput
    /**
     * Limit how many Instances to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstanceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Instance upsert
   */
  export type InstanceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instance
     */
    select?: InstanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instance
     */
    omit?: InstanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstanceInclude<ExtArgs> | null
    /**
     * The filter to search for the Instance to update in case it exists.
     */
    where: InstanceWhereUniqueInput
    /**
     * In case the Instance found by the `where` argument doesn't exist, create a new Instance with this data.
     */
    create: XOR<InstanceCreateInput, InstanceUncheckedCreateInput>
    /**
     * In case the Instance was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InstanceUpdateInput, InstanceUncheckedUpdateInput>
  }

  /**
   * Instance delete
   */
  export type InstanceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instance
     */
    select?: InstanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instance
     */
    omit?: InstanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstanceInclude<ExtArgs> | null
    /**
     * Filter which Instance to delete.
     */
    where: InstanceWhereUniqueInput
  }

  /**
   * Instance deleteMany
   */
  export type InstanceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Instances to delete
     */
    where?: InstanceWhereInput
    /**
     * Limit how many Instances to delete.
     */
    limit?: number
  }

  /**
   * Instance without action
   */
  export type InstanceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instance
     */
    select?: InstanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instance
     */
    omit?: InstanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstanceInclude<ExtArgs> | null
  }


  /**
   * Model ProjectDetails
   */

  export type AggregateProjectDetails = {
    _count: ProjectDetailsCountAggregateOutputType | null
    _avg: ProjectDetailsAvgAggregateOutputType | null
    _sum: ProjectDetailsSumAggregateOutputType | null
    _min: ProjectDetailsMinAggregateOutputType | null
    _max: ProjectDetailsMaxAggregateOutputType | null
  }

  export type ProjectDetailsAvgAggregateOutputType = {
    id: number | null
  }

  export type ProjectDetailsSumAggregateOutputType = {
    id: number | null
  }

  export type ProjectDetailsMinAggregateOutputType = {
    id: number | null
    projectNftPolicy: string | null
    TreasuryTokenPolicy: string | null
    TreasuryAddress: string | null
    ContributorStateAddress: string | null
    EscrowAddress: string | null
    createdAt: Date | null
  }

  export type ProjectDetailsMaxAggregateOutputType = {
    id: number | null
    projectNftPolicy: string | null
    TreasuryTokenPolicy: string | null
    TreasuryAddress: string | null
    ContributorStateAddress: string | null
    EscrowAddress: string | null
    createdAt: Date | null
  }

  export type ProjectDetailsCountAggregateOutputType = {
    id: number
    projectNftPolicy: number
    TreasuryTokenPolicy: number
    TreasuryAddress: number
    ContributorStateAddress: number
    EscrowAddress: number
    createdAt: number
    _all: number
  }


  export type ProjectDetailsAvgAggregateInputType = {
    id?: true
  }

  export type ProjectDetailsSumAggregateInputType = {
    id?: true
  }

  export type ProjectDetailsMinAggregateInputType = {
    id?: true
    projectNftPolicy?: true
    TreasuryTokenPolicy?: true
    TreasuryAddress?: true
    ContributorStateAddress?: true
    EscrowAddress?: true
    createdAt?: true
  }

  export type ProjectDetailsMaxAggregateInputType = {
    id?: true
    projectNftPolicy?: true
    TreasuryTokenPolicy?: true
    TreasuryAddress?: true
    ContributorStateAddress?: true
    EscrowAddress?: true
    createdAt?: true
  }

  export type ProjectDetailsCountAggregateInputType = {
    id?: true
    projectNftPolicy?: true
    TreasuryTokenPolicy?: true
    TreasuryAddress?: true
    ContributorStateAddress?: true
    EscrowAddress?: true
    createdAt?: true
    _all?: true
  }

  export type ProjectDetailsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectDetails to aggregate.
     */
    where?: ProjectDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectDetails to fetch.
     */
    orderBy?: ProjectDetailsOrderByWithRelationInput | ProjectDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProjectDetails
    **/
    _count?: true | ProjectDetailsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProjectDetailsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProjectDetailsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectDetailsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectDetailsMaxAggregateInputType
  }

  export type GetProjectDetailsAggregateType<T extends ProjectDetailsAggregateArgs> = {
        [P in keyof T & keyof AggregateProjectDetails]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProjectDetails[P]>
      : GetScalarType<T[P], AggregateProjectDetails[P]>
  }




  export type ProjectDetailsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectDetailsWhereInput
    orderBy?: ProjectDetailsOrderByWithAggregationInput | ProjectDetailsOrderByWithAggregationInput[]
    by: ProjectDetailsScalarFieldEnum[] | ProjectDetailsScalarFieldEnum
    having?: ProjectDetailsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectDetailsCountAggregateInputType | true
    _avg?: ProjectDetailsAvgAggregateInputType
    _sum?: ProjectDetailsSumAggregateInputType
    _min?: ProjectDetailsMinAggregateInputType
    _max?: ProjectDetailsMaxAggregateInputType
  }

  export type ProjectDetailsGroupByOutputType = {
    id: number
    projectNftPolicy: string
    TreasuryTokenPolicy: string | null
    TreasuryAddress: string | null
    ContributorStateAddress: string | null
    EscrowAddress: string | null
    createdAt: Date
    _count: ProjectDetailsCountAggregateOutputType | null
    _avg: ProjectDetailsAvgAggregateOutputType | null
    _sum: ProjectDetailsSumAggregateOutputType | null
    _min: ProjectDetailsMinAggregateOutputType | null
    _max: ProjectDetailsMaxAggregateOutputType | null
  }

  type GetProjectDetailsGroupByPayload<T extends ProjectDetailsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectDetailsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectDetailsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectDetailsGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectDetailsGroupByOutputType[P]>
        }
      >
    >


  export type ProjectDetailsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectNftPolicy?: boolean
    TreasuryTokenPolicy?: boolean
    TreasuryAddress?: boolean
    ContributorStateAddress?: boolean
    EscrowAddress?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["projectDetails"]>

  export type ProjectDetailsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectNftPolicy?: boolean
    TreasuryTokenPolicy?: boolean
    TreasuryAddress?: boolean
    ContributorStateAddress?: boolean
    EscrowAddress?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["projectDetails"]>

  export type ProjectDetailsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectNftPolicy?: boolean
    TreasuryTokenPolicy?: boolean
    TreasuryAddress?: boolean
    ContributorStateAddress?: boolean
    EscrowAddress?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["projectDetails"]>

  export type ProjectDetailsSelectScalar = {
    id?: boolean
    projectNftPolicy?: boolean
    TreasuryTokenPolicy?: boolean
    TreasuryAddress?: boolean
    ContributorStateAddress?: boolean
    EscrowAddress?: boolean
    createdAt?: boolean
  }

  export type ProjectDetailsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "projectNftPolicy" | "TreasuryTokenPolicy" | "TreasuryAddress" | "ContributorStateAddress" | "EscrowAddress" | "createdAt", ExtArgs["result"]["projectDetails"]>

  export type $ProjectDetailsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProjectDetails"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      projectNftPolicy: string
      TreasuryTokenPolicy: string | null
      TreasuryAddress: string | null
      ContributorStateAddress: string | null
      EscrowAddress: string | null
      createdAt: Date
    }, ExtArgs["result"]["projectDetails"]>
    composites: {}
  }

  type ProjectDetailsGetPayload<S extends boolean | null | undefined | ProjectDetailsDefaultArgs> = $Result.GetResult<Prisma.$ProjectDetailsPayload, S>

  type ProjectDetailsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectDetailsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectDetailsCountAggregateInputType | true
    }

  export interface ProjectDetailsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProjectDetails'], meta: { name: 'ProjectDetails' } }
    /**
     * Find zero or one ProjectDetails that matches the filter.
     * @param {ProjectDetailsFindUniqueArgs} args - Arguments to find a ProjectDetails
     * @example
     * // Get one ProjectDetails
     * const projectDetails = await prisma.projectDetails.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectDetailsFindUniqueArgs>(args: SelectSubset<T, ProjectDetailsFindUniqueArgs<ExtArgs>>): Prisma__ProjectDetailsClient<$Result.GetResult<Prisma.$ProjectDetailsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProjectDetails that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectDetailsFindUniqueOrThrowArgs} args - Arguments to find a ProjectDetails
     * @example
     * // Get one ProjectDetails
     * const projectDetails = await prisma.projectDetails.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectDetailsFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectDetailsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectDetailsClient<$Result.GetResult<Prisma.$ProjectDetailsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProjectDetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectDetailsFindFirstArgs} args - Arguments to find a ProjectDetails
     * @example
     * // Get one ProjectDetails
     * const projectDetails = await prisma.projectDetails.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectDetailsFindFirstArgs>(args?: SelectSubset<T, ProjectDetailsFindFirstArgs<ExtArgs>>): Prisma__ProjectDetailsClient<$Result.GetResult<Prisma.$ProjectDetailsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProjectDetails that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectDetailsFindFirstOrThrowArgs} args - Arguments to find a ProjectDetails
     * @example
     * // Get one ProjectDetails
     * const projectDetails = await prisma.projectDetails.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectDetailsFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectDetailsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectDetailsClient<$Result.GetResult<Prisma.$ProjectDetailsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProjectDetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectDetailsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProjectDetails
     * const projectDetails = await prisma.projectDetails.findMany()
     * 
     * // Get first 10 ProjectDetails
     * const projectDetails = await prisma.projectDetails.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectDetailsWithIdOnly = await prisma.projectDetails.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectDetailsFindManyArgs>(args?: SelectSubset<T, ProjectDetailsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectDetailsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProjectDetails.
     * @param {ProjectDetailsCreateArgs} args - Arguments to create a ProjectDetails.
     * @example
     * // Create one ProjectDetails
     * const ProjectDetails = await prisma.projectDetails.create({
     *   data: {
     *     // ... data to create a ProjectDetails
     *   }
     * })
     * 
     */
    create<T extends ProjectDetailsCreateArgs>(args: SelectSubset<T, ProjectDetailsCreateArgs<ExtArgs>>): Prisma__ProjectDetailsClient<$Result.GetResult<Prisma.$ProjectDetailsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProjectDetails.
     * @param {ProjectDetailsCreateManyArgs} args - Arguments to create many ProjectDetails.
     * @example
     * // Create many ProjectDetails
     * const projectDetails = await prisma.projectDetails.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectDetailsCreateManyArgs>(args?: SelectSubset<T, ProjectDetailsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProjectDetails and returns the data saved in the database.
     * @param {ProjectDetailsCreateManyAndReturnArgs} args - Arguments to create many ProjectDetails.
     * @example
     * // Create many ProjectDetails
     * const projectDetails = await prisma.projectDetails.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProjectDetails and only return the `id`
     * const projectDetailsWithIdOnly = await prisma.projectDetails.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectDetailsCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectDetailsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectDetailsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProjectDetails.
     * @param {ProjectDetailsDeleteArgs} args - Arguments to delete one ProjectDetails.
     * @example
     * // Delete one ProjectDetails
     * const ProjectDetails = await prisma.projectDetails.delete({
     *   where: {
     *     // ... filter to delete one ProjectDetails
     *   }
     * })
     * 
     */
    delete<T extends ProjectDetailsDeleteArgs>(args: SelectSubset<T, ProjectDetailsDeleteArgs<ExtArgs>>): Prisma__ProjectDetailsClient<$Result.GetResult<Prisma.$ProjectDetailsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProjectDetails.
     * @param {ProjectDetailsUpdateArgs} args - Arguments to update one ProjectDetails.
     * @example
     * // Update one ProjectDetails
     * const projectDetails = await prisma.projectDetails.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectDetailsUpdateArgs>(args: SelectSubset<T, ProjectDetailsUpdateArgs<ExtArgs>>): Prisma__ProjectDetailsClient<$Result.GetResult<Prisma.$ProjectDetailsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProjectDetails.
     * @param {ProjectDetailsDeleteManyArgs} args - Arguments to filter ProjectDetails to delete.
     * @example
     * // Delete a few ProjectDetails
     * const { count } = await prisma.projectDetails.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectDetailsDeleteManyArgs>(args?: SelectSubset<T, ProjectDetailsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectDetailsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProjectDetails
     * const projectDetails = await prisma.projectDetails.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectDetailsUpdateManyArgs>(args: SelectSubset<T, ProjectDetailsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectDetails and returns the data updated in the database.
     * @param {ProjectDetailsUpdateManyAndReturnArgs} args - Arguments to update many ProjectDetails.
     * @example
     * // Update many ProjectDetails
     * const projectDetails = await prisma.projectDetails.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProjectDetails and only return the `id`
     * const projectDetailsWithIdOnly = await prisma.projectDetails.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProjectDetailsUpdateManyAndReturnArgs>(args: SelectSubset<T, ProjectDetailsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectDetailsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProjectDetails.
     * @param {ProjectDetailsUpsertArgs} args - Arguments to update or create a ProjectDetails.
     * @example
     * // Update or create a ProjectDetails
     * const projectDetails = await prisma.projectDetails.upsert({
     *   create: {
     *     // ... data to create a ProjectDetails
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProjectDetails we want to update
     *   }
     * })
     */
    upsert<T extends ProjectDetailsUpsertArgs>(args: SelectSubset<T, ProjectDetailsUpsertArgs<ExtArgs>>): Prisma__ProjectDetailsClient<$Result.GetResult<Prisma.$ProjectDetailsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProjectDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectDetailsCountArgs} args - Arguments to filter ProjectDetails to count.
     * @example
     * // Count the number of ProjectDetails
     * const count = await prisma.projectDetails.count({
     *   where: {
     *     // ... the filter for the ProjectDetails we want to count
     *   }
     * })
    **/
    count<T extends ProjectDetailsCountArgs>(
      args?: Subset<T, ProjectDetailsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectDetailsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProjectDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectDetailsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProjectDetailsAggregateArgs>(args: Subset<T, ProjectDetailsAggregateArgs>): Prisma.PrismaPromise<GetProjectDetailsAggregateType<T>>

    /**
     * Group by ProjectDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectDetailsGroupByArgs} args - Group by arguments.
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
      T extends ProjectDetailsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectDetailsGroupByArgs['orderBy'] }
        : { orderBy?: ProjectDetailsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProjectDetailsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectDetailsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProjectDetails model
   */
  readonly fields: ProjectDetailsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProjectDetails.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectDetailsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the ProjectDetails model
   */
  interface ProjectDetailsFieldRefs {
    readonly id: FieldRef<"ProjectDetails", 'Int'>
    readonly projectNftPolicy: FieldRef<"ProjectDetails", 'String'>
    readonly TreasuryTokenPolicy: FieldRef<"ProjectDetails", 'String'>
    readonly TreasuryAddress: FieldRef<"ProjectDetails", 'String'>
    readonly ContributorStateAddress: FieldRef<"ProjectDetails", 'String'>
    readonly EscrowAddress: FieldRef<"ProjectDetails", 'String'>
    readonly createdAt: FieldRef<"ProjectDetails", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProjectDetails findUnique
   */
  export type ProjectDetailsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectDetails
     */
    select?: ProjectDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectDetails
     */
    omit?: ProjectDetailsOmit<ExtArgs> | null
    /**
     * Filter, which ProjectDetails to fetch.
     */
    where: ProjectDetailsWhereUniqueInput
  }

  /**
   * ProjectDetails findUniqueOrThrow
   */
  export type ProjectDetailsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectDetails
     */
    select?: ProjectDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectDetails
     */
    omit?: ProjectDetailsOmit<ExtArgs> | null
    /**
     * Filter, which ProjectDetails to fetch.
     */
    where: ProjectDetailsWhereUniqueInput
  }

  /**
   * ProjectDetails findFirst
   */
  export type ProjectDetailsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectDetails
     */
    select?: ProjectDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectDetails
     */
    omit?: ProjectDetailsOmit<ExtArgs> | null
    /**
     * Filter, which ProjectDetails to fetch.
     */
    where?: ProjectDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectDetails to fetch.
     */
    orderBy?: ProjectDetailsOrderByWithRelationInput | ProjectDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectDetails.
     */
    cursor?: ProjectDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectDetails.
     */
    distinct?: ProjectDetailsScalarFieldEnum | ProjectDetailsScalarFieldEnum[]
  }

  /**
   * ProjectDetails findFirstOrThrow
   */
  export type ProjectDetailsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectDetails
     */
    select?: ProjectDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectDetails
     */
    omit?: ProjectDetailsOmit<ExtArgs> | null
    /**
     * Filter, which ProjectDetails to fetch.
     */
    where?: ProjectDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectDetails to fetch.
     */
    orderBy?: ProjectDetailsOrderByWithRelationInput | ProjectDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectDetails.
     */
    cursor?: ProjectDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectDetails.
     */
    distinct?: ProjectDetailsScalarFieldEnum | ProjectDetailsScalarFieldEnum[]
  }

  /**
   * ProjectDetails findMany
   */
  export type ProjectDetailsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectDetails
     */
    select?: ProjectDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectDetails
     */
    omit?: ProjectDetailsOmit<ExtArgs> | null
    /**
     * Filter, which ProjectDetails to fetch.
     */
    where?: ProjectDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectDetails to fetch.
     */
    orderBy?: ProjectDetailsOrderByWithRelationInput | ProjectDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProjectDetails.
     */
    cursor?: ProjectDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectDetails.
     */
    skip?: number
    distinct?: ProjectDetailsScalarFieldEnum | ProjectDetailsScalarFieldEnum[]
  }

  /**
   * ProjectDetails create
   */
  export type ProjectDetailsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectDetails
     */
    select?: ProjectDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectDetails
     */
    omit?: ProjectDetailsOmit<ExtArgs> | null
    /**
     * The data needed to create a ProjectDetails.
     */
    data: XOR<ProjectDetailsCreateInput, ProjectDetailsUncheckedCreateInput>
  }

  /**
   * ProjectDetails createMany
   */
  export type ProjectDetailsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProjectDetails.
     */
    data: ProjectDetailsCreateManyInput | ProjectDetailsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProjectDetails createManyAndReturn
   */
  export type ProjectDetailsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectDetails
     */
    select?: ProjectDetailsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectDetails
     */
    omit?: ProjectDetailsOmit<ExtArgs> | null
    /**
     * The data used to create many ProjectDetails.
     */
    data: ProjectDetailsCreateManyInput | ProjectDetailsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProjectDetails update
   */
  export type ProjectDetailsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectDetails
     */
    select?: ProjectDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectDetails
     */
    omit?: ProjectDetailsOmit<ExtArgs> | null
    /**
     * The data needed to update a ProjectDetails.
     */
    data: XOR<ProjectDetailsUpdateInput, ProjectDetailsUncheckedUpdateInput>
    /**
     * Choose, which ProjectDetails to update.
     */
    where: ProjectDetailsWhereUniqueInput
  }

  /**
   * ProjectDetails updateMany
   */
  export type ProjectDetailsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProjectDetails.
     */
    data: XOR<ProjectDetailsUpdateManyMutationInput, ProjectDetailsUncheckedUpdateManyInput>
    /**
     * Filter which ProjectDetails to update
     */
    where?: ProjectDetailsWhereInput
    /**
     * Limit how many ProjectDetails to update.
     */
    limit?: number
  }

  /**
   * ProjectDetails updateManyAndReturn
   */
  export type ProjectDetailsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectDetails
     */
    select?: ProjectDetailsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectDetails
     */
    omit?: ProjectDetailsOmit<ExtArgs> | null
    /**
     * The data used to update ProjectDetails.
     */
    data: XOR<ProjectDetailsUpdateManyMutationInput, ProjectDetailsUncheckedUpdateManyInput>
    /**
     * Filter which ProjectDetails to update
     */
    where?: ProjectDetailsWhereInput
    /**
     * Limit how many ProjectDetails to update.
     */
    limit?: number
  }

  /**
   * ProjectDetails upsert
   */
  export type ProjectDetailsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectDetails
     */
    select?: ProjectDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectDetails
     */
    omit?: ProjectDetailsOmit<ExtArgs> | null
    /**
     * The filter to search for the ProjectDetails to update in case it exists.
     */
    where: ProjectDetailsWhereUniqueInput
    /**
     * In case the ProjectDetails found by the `where` argument doesn't exist, create a new ProjectDetails with this data.
     */
    create: XOR<ProjectDetailsCreateInput, ProjectDetailsUncheckedCreateInput>
    /**
     * In case the ProjectDetails was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectDetailsUpdateInput, ProjectDetailsUncheckedUpdateInput>
  }

  /**
   * ProjectDetails delete
   */
  export type ProjectDetailsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectDetails
     */
    select?: ProjectDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectDetails
     */
    omit?: ProjectDetailsOmit<ExtArgs> | null
    /**
     * Filter which ProjectDetails to delete.
     */
    where: ProjectDetailsWhereUniqueInput
  }

  /**
   * ProjectDetails deleteMany
   */
  export type ProjectDetailsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectDetails to delete
     */
    where?: ProjectDetailsWhereInput
    /**
     * Limit how many ProjectDetails to delete.
     */
    limit?: number
  }

  /**
   * ProjectDetails without action
   */
  export type ProjectDetailsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectDetails
     */
    select?: ProjectDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectDetails
     */
    omit?: ProjectDetailsOmit<ExtArgs> | null
  }


  /**
   * Model LocalStateTxCbor
   */

  export type AggregateLocalStateTxCbor = {
    _count: LocalStateTxCborCountAggregateOutputType | null
    _avg: LocalStateTxCborAvgAggregateOutputType | null
    _sum: LocalStateTxCborSumAggregateOutputType | null
    _min: LocalStateTxCborMinAggregateOutputType | null
    _max: LocalStateTxCborMaxAggregateOutputType | null
  }

  export type LocalStateTxCborAvgAggregateOutputType = {
    id: number | null
  }

  export type LocalStateTxCborSumAggregateOutputType = {
    id: number | null
  }

  export type LocalStateTxCborMinAggregateOutputType = {
    id: number | null
    txHash: string | null
    cbor: string | null
    localStatePolicy: string | null
    validator: $Enums.ScriptCategory | null
    createdAt: Date | null
  }

  export type LocalStateTxCborMaxAggregateOutputType = {
    id: number | null
    txHash: string | null
    cbor: string | null
    localStatePolicy: string | null
    validator: $Enums.ScriptCategory | null
    createdAt: Date | null
  }

  export type LocalStateTxCborCountAggregateOutputType = {
    id: number
    txHash: number
    cbor: number
    localStatePolicy: number
    validator: number
    createdAt: number
    _all: number
  }


  export type LocalStateTxCborAvgAggregateInputType = {
    id?: true
  }

  export type LocalStateTxCborSumAggregateInputType = {
    id?: true
  }

  export type LocalStateTxCborMinAggregateInputType = {
    id?: true
    txHash?: true
    cbor?: true
    localStatePolicy?: true
    validator?: true
    createdAt?: true
  }

  export type LocalStateTxCborMaxAggregateInputType = {
    id?: true
    txHash?: true
    cbor?: true
    localStatePolicy?: true
    validator?: true
    createdAt?: true
  }

  export type LocalStateTxCborCountAggregateInputType = {
    id?: true
    txHash?: true
    cbor?: true
    localStatePolicy?: true
    validator?: true
    createdAt?: true
    _all?: true
  }

  export type LocalStateTxCborAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LocalStateTxCbor to aggregate.
     */
    where?: LocalStateTxCborWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LocalStateTxCbors to fetch.
     */
    orderBy?: LocalStateTxCborOrderByWithRelationInput | LocalStateTxCborOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LocalStateTxCborWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LocalStateTxCbors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LocalStateTxCbors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LocalStateTxCbors
    **/
    _count?: true | LocalStateTxCborCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LocalStateTxCborAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LocalStateTxCborSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LocalStateTxCborMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LocalStateTxCborMaxAggregateInputType
  }

  export type GetLocalStateTxCborAggregateType<T extends LocalStateTxCborAggregateArgs> = {
        [P in keyof T & keyof AggregateLocalStateTxCbor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLocalStateTxCbor[P]>
      : GetScalarType<T[P], AggregateLocalStateTxCbor[P]>
  }




  export type LocalStateTxCborGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LocalStateTxCborWhereInput
    orderBy?: LocalStateTxCborOrderByWithAggregationInput | LocalStateTxCborOrderByWithAggregationInput[]
    by: LocalStateTxCborScalarFieldEnum[] | LocalStateTxCborScalarFieldEnum
    having?: LocalStateTxCborScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LocalStateTxCborCountAggregateInputType | true
    _avg?: LocalStateTxCborAvgAggregateInputType
    _sum?: LocalStateTxCborSumAggregateInputType
    _min?: LocalStateTxCborMinAggregateInputType
    _max?: LocalStateTxCborMaxAggregateInputType
  }

  export type LocalStateTxCborGroupByOutputType = {
    id: number
    txHash: string
    cbor: string
    localStatePolicy: string
    validator: $Enums.ScriptCategory
    createdAt: Date
    _count: LocalStateTxCborCountAggregateOutputType | null
    _avg: LocalStateTxCborAvgAggregateOutputType | null
    _sum: LocalStateTxCborSumAggregateOutputType | null
    _min: LocalStateTxCborMinAggregateOutputType | null
    _max: LocalStateTxCborMaxAggregateOutputType | null
  }

  type GetLocalStateTxCborGroupByPayload<T extends LocalStateTxCborGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LocalStateTxCborGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LocalStateTxCborGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LocalStateTxCborGroupByOutputType[P]>
            : GetScalarType<T[P], LocalStateTxCborGroupByOutputType[P]>
        }
      >
    >


  export type LocalStateTxCborSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    txHash?: boolean
    cbor?: boolean
    localStatePolicy?: boolean
    validator?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["localStateTxCbor"]>

  export type LocalStateTxCborSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    txHash?: boolean
    cbor?: boolean
    localStatePolicy?: boolean
    validator?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["localStateTxCbor"]>

  export type LocalStateTxCborSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    txHash?: boolean
    cbor?: boolean
    localStatePolicy?: boolean
    validator?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["localStateTxCbor"]>

  export type LocalStateTxCborSelectScalar = {
    id?: boolean
    txHash?: boolean
    cbor?: boolean
    localStatePolicy?: boolean
    validator?: boolean
    createdAt?: boolean
  }

  export type LocalStateTxCborOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "txHash" | "cbor" | "localStatePolicy" | "validator" | "createdAt", ExtArgs["result"]["localStateTxCbor"]>

  export type $LocalStateTxCborPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LocalStateTxCbor"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      txHash: string
      cbor: string
      localStatePolicy: string
      validator: $Enums.ScriptCategory
      createdAt: Date
    }, ExtArgs["result"]["localStateTxCbor"]>
    composites: {}
  }

  type LocalStateTxCborGetPayload<S extends boolean | null | undefined | LocalStateTxCborDefaultArgs> = $Result.GetResult<Prisma.$LocalStateTxCborPayload, S>

  type LocalStateTxCborCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LocalStateTxCborFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LocalStateTxCborCountAggregateInputType | true
    }

  export interface LocalStateTxCborDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LocalStateTxCbor'], meta: { name: 'LocalStateTxCbor' } }
    /**
     * Find zero or one LocalStateTxCbor that matches the filter.
     * @param {LocalStateTxCborFindUniqueArgs} args - Arguments to find a LocalStateTxCbor
     * @example
     * // Get one LocalStateTxCbor
     * const localStateTxCbor = await prisma.localStateTxCbor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LocalStateTxCborFindUniqueArgs>(args: SelectSubset<T, LocalStateTxCborFindUniqueArgs<ExtArgs>>): Prisma__LocalStateTxCborClient<$Result.GetResult<Prisma.$LocalStateTxCborPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LocalStateTxCbor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LocalStateTxCborFindUniqueOrThrowArgs} args - Arguments to find a LocalStateTxCbor
     * @example
     * // Get one LocalStateTxCbor
     * const localStateTxCbor = await prisma.localStateTxCbor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LocalStateTxCborFindUniqueOrThrowArgs>(args: SelectSubset<T, LocalStateTxCborFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LocalStateTxCborClient<$Result.GetResult<Prisma.$LocalStateTxCborPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LocalStateTxCbor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocalStateTxCborFindFirstArgs} args - Arguments to find a LocalStateTxCbor
     * @example
     * // Get one LocalStateTxCbor
     * const localStateTxCbor = await prisma.localStateTxCbor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LocalStateTxCborFindFirstArgs>(args?: SelectSubset<T, LocalStateTxCborFindFirstArgs<ExtArgs>>): Prisma__LocalStateTxCborClient<$Result.GetResult<Prisma.$LocalStateTxCborPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LocalStateTxCbor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocalStateTxCborFindFirstOrThrowArgs} args - Arguments to find a LocalStateTxCbor
     * @example
     * // Get one LocalStateTxCbor
     * const localStateTxCbor = await prisma.localStateTxCbor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LocalStateTxCborFindFirstOrThrowArgs>(args?: SelectSubset<T, LocalStateTxCborFindFirstOrThrowArgs<ExtArgs>>): Prisma__LocalStateTxCborClient<$Result.GetResult<Prisma.$LocalStateTxCborPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LocalStateTxCbors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocalStateTxCborFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LocalStateTxCbors
     * const localStateTxCbors = await prisma.localStateTxCbor.findMany()
     * 
     * // Get first 10 LocalStateTxCbors
     * const localStateTxCbors = await prisma.localStateTxCbor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const localStateTxCborWithIdOnly = await prisma.localStateTxCbor.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LocalStateTxCborFindManyArgs>(args?: SelectSubset<T, LocalStateTxCborFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocalStateTxCborPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LocalStateTxCbor.
     * @param {LocalStateTxCborCreateArgs} args - Arguments to create a LocalStateTxCbor.
     * @example
     * // Create one LocalStateTxCbor
     * const LocalStateTxCbor = await prisma.localStateTxCbor.create({
     *   data: {
     *     // ... data to create a LocalStateTxCbor
     *   }
     * })
     * 
     */
    create<T extends LocalStateTxCborCreateArgs>(args: SelectSubset<T, LocalStateTxCborCreateArgs<ExtArgs>>): Prisma__LocalStateTxCborClient<$Result.GetResult<Prisma.$LocalStateTxCborPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LocalStateTxCbors.
     * @param {LocalStateTxCborCreateManyArgs} args - Arguments to create many LocalStateTxCbors.
     * @example
     * // Create many LocalStateTxCbors
     * const localStateTxCbor = await prisma.localStateTxCbor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LocalStateTxCborCreateManyArgs>(args?: SelectSubset<T, LocalStateTxCborCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LocalStateTxCbors and returns the data saved in the database.
     * @param {LocalStateTxCborCreateManyAndReturnArgs} args - Arguments to create many LocalStateTxCbors.
     * @example
     * // Create many LocalStateTxCbors
     * const localStateTxCbor = await prisma.localStateTxCbor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LocalStateTxCbors and only return the `id`
     * const localStateTxCborWithIdOnly = await prisma.localStateTxCbor.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LocalStateTxCborCreateManyAndReturnArgs>(args?: SelectSubset<T, LocalStateTxCborCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocalStateTxCborPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LocalStateTxCbor.
     * @param {LocalStateTxCborDeleteArgs} args - Arguments to delete one LocalStateTxCbor.
     * @example
     * // Delete one LocalStateTxCbor
     * const LocalStateTxCbor = await prisma.localStateTxCbor.delete({
     *   where: {
     *     // ... filter to delete one LocalStateTxCbor
     *   }
     * })
     * 
     */
    delete<T extends LocalStateTxCborDeleteArgs>(args: SelectSubset<T, LocalStateTxCborDeleteArgs<ExtArgs>>): Prisma__LocalStateTxCborClient<$Result.GetResult<Prisma.$LocalStateTxCborPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LocalStateTxCbor.
     * @param {LocalStateTxCborUpdateArgs} args - Arguments to update one LocalStateTxCbor.
     * @example
     * // Update one LocalStateTxCbor
     * const localStateTxCbor = await prisma.localStateTxCbor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LocalStateTxCborUpdateArgs>(args: SelectSubset<T, LocalStateTxCborUpdateArgs<ExtArgs>>): Prisma__LocalStateTxCborClient<$Result.GetResult<Prisma.$LocalStateTxCborPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LocalStateTxCbors.
     * @param {LocalStateTxCborDeleteManyArgs} args - Arguments to filter LocalStateTxCbors to delete.
     * @example
     * // Delete a few LocalStateTxCbors
     * const { count } = await prisma.localStateTxCbor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LocalStateTxCborDeleteManyArgs>(args?: SelectSubset<T, LocalStateTxCborDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LocalStateTxCbors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocalStateTxCborUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LocalStateTxCbors
     * const localStateTxCbor = await prisma.localStateTxCbor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LocalStateTxCborUpdateManyArgs>(args: SelectSubset<T, LocalStateTxCborUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LocalStateTxCbors and returns the data updated in the database.
     * @param {LocalStateTxCborUpdateManyAndReturnArgs} args - Arguments to update many LocalStateTxCbors.
     * @example
     * // Update many LocalStateTxCbors
     * const localStateTxCbor = await prisma.localStateTxCbor.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LocalStateTxCbors and only return the `id`
     * const localStateTxCborWithIdOnly = await prisma.localStateTxCbor.updateManyAndReturn({
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
    updateManyAndReturn<T extends LocalStateTxCborUpdateManyAndReturnArgs>(args: SelectSubset<T, LocalStateTxCborUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocalStateTxCborPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LocalStateTxCbor.
     * @param {LocalStateTxCborUpsertArgs} args - Arguments to update or create a LocalStateTxCbor.
     * @example
     * // Update or create a LocalStateTxCbor
     * const localStateTxCbor = await prisma.localStateTxCbor.upsert({
     *   create: {
     *     // ... data to create a LocalStateTxCbor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LocalStateTxCbor we want to update
     *   }
     * })
     */
    upsert<T extends LocalStateTxCborUpsertArgs>(args: SelectSubset<T, LocalStateTxCborUpsertArgs<ExtArgs>>): Prisma__LocalStateTxCborClient<$Result.GetResult<Prisma.$LocalStateTxCborPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LocalStateTxCbors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocalStateTxCborCountArgs} args - Arguments to filter LocalStateTxCbors to count.
     * @example
     * // Count the number of LocalStateTxCbors
     * const count = await prisma.localStateTxCbor.count({
     *   where: {
     *     // ... the filter for the LocalStateTxCbors we want to count
     *   }
     * })
    **/
    count<T extends LocalStateTxCborCountArgs>(
      args?: Subset<T, LocalStateTxCborCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LocalStateTxCborCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LocalStateTxCbor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocalStateTxCborAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LocalStateTxCborAggregateArgs>(args: Subset<T, LocalStateTxCborAggregateArgs>): Prisma.PrismaPromise<GetLocalStateTxCborAggregateType<T>>

    /**
     * Group by LocalStateTxCbor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocalStateTxCborGroupByArgs} args - Group by arguments.
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
      T extends LocalStateTxCborGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LocalStateTxCborGroupByArgs['orderBy'] }
        : { orderBy?: LocalStateTxCborGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LocalStateTxCborGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLocalStateTxCborGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LocalStateTxCbor model
   */
  readonly fields: LocalStateTxCborFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LocalStateTxCbor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LocalStateTxCborClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the LocalStateTxCbor model
   */
  interface LocalStateTxCborFieldRefs {
    readonly id: FieldRef<"LocalStateTxCbor", 'Int'>
    readonly txHash: FieldRef<"LocalStateTxCbor", 'String'>
    readonly cbor: FieldRef<"LocalStateTxCbor", 'String'>
    readonly localStatePolicy: FieldRef<"LocalStateTxCbor", 'String'>
    readonly validator: FieldRef<"LocalStateTxCbor", 'ScriptCategory'>
    readonly createdAt: FieldRef<"LocalStateTxCbor", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LocalStateTxCbor findUnique
   */
  export type LocalStateTxCborFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocalStateTxCbor
     */
    select?: LocalStateTxCborSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LocalStateTxCbor
     */
    omit?: LocalStateTxCborOmit<ExtArgs> | null
    /**
     * Filter, which LocalStateTxCbor to fetch.
     */
    where: LocalStateTxCborWhereUniqueInput
  }

  /**
   * LocalStateTxCbor findUniqueOrThrow
   */
  export type LocalStateTxCborFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocalStateTxCbor
     */
    select?: LocalStateTxCborSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LocalStateTxCbor
     */
    omit?: LocalStateTxCborOmit<ExtArgs> | null
    /**
     * Filter, which LocalStateTxCbor to fetch.
     */
    where: LocalStateTxCborWhereUniqueInput
  }

  /**
   * LocalStateTxCbor findFirst
   */
  export type LocalStateTxCborFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocalStateTxCbor
     */
    select?: LocalStateTxCborSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LocalStateTxCbor
     */
    omit?: LocalStateTxCborOmit<ExtArgs> | null
    /**
     * Filter, which LocalStateTxCbor to fetch.
     */
    where?: LocalStateTxCborWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LocalStateTxCbors to fetch.
     */
    orderBy?: LocalStateTxCborOrderByWithRelationInput | LocalStateTxCborOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LocalStateTxCbors.
     */
    cursor?: LocalStateTxCborWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LocalStateTxCbors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LocalStateTxCbors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LocalStateTxCbors.
     */
    distinct?: LocalStateTxCborScalarFieldEnum | LocalStateTxCborScalarFieldEnum[]
  }

  /**
   * LocalStateTxCbor findFirstOrThrow
   */
  export type LocalStateTxCborFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocalStateTxCbor
     */
    select?: LocalStateTxCborSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LocalStateTxCbor
     */
    omit?: LocalStateTxCborOmit<ExtArgs> | null
    /**
     * Filter, which LocalStateTxCbor to fetch.
     */
    where?: LocalStateTxCborWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LocalStateTxCbors to fetch.
     */
    orderBy?: LocalStateTxCborOrderByWithRelationInput | LocalStateTxCborOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LocalStateTxCbors.
     */
    cursor?: LocalStateTxCborWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LocalStateTxCbors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LocalStateTxCbors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LocalStateTxCbors.
     */
    distinct?: LocalStateTxCborScalarFieldEnum | LocalStateTxCborScalarFieldEnum[]
  }

  /**
   * LocalStateTxCbor findMany
   */
  export type LocalStateTxCborFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocalStateTxCbor
     */
    select?: LocalStateTxCborSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LocalStateTxCbor
     */
    omit?: LocalStateTxCborOmit<ExtArgs> | null
    /**
     * Filter, which LocalStateTxCbors to fetch.
     */
    where?: LocalStateTxCborWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LocalStateTxCbors to fetch.
     */
    orderBy?: LocalStateTxCborOrderByWithRelationInput | LocalStateTxCborOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LocalStateTxCbors.
     */
    cursor?: LocalStateTxCborWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LocalStateTxCbors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LocalStateTxCbors.
     */
    skip?: number
    distinct?: LocalStateTxCborScalarFieldEnum | LocalStateTxCborScalarFieldEnum[]
  }

  /**
   * LocalStateTxCbor create
   */
  export type LocalStateTxCborCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocalStateTxCbor
     */
    select?: LocalStateTxCborSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LocalStateTxCbor
     */
    omit?: LocalStateTxCborOmit<ExtArgs> | null
    /**
     * The data needed to create a LocalStateTxCbor.
     */
    data: XOR<LocalStateTxCborCreateInput, LocalStateTxCborUncheckedCreateInput>
  }

  /**
   * LocalStateTxCbor createMany
   */
  export type LocalStateTxCborCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LocalStateTxCbors.
     */
    data: LocalStateTxCborCreateManyInput | LocalStateTxCborCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LocalStateTxCbor createManyAndReturn
   */
  export type LocalStateTxCborCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocalStateTxCbor
     */
    select?: LocalStateTxCborSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LocalStateTxCbor
     */
    omit?: LocalStateTxCborOmit<ExtArgs> | null
    /**
     * The data used to create many LocalStateTxCbors.
     */
    data: LocalStateTxCborCreateManyInput | LocalStateTxCborCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LocalStateTxCbor update
   */
  export type LocalStateTxCborUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocalStateTxCbor
     */
    select?: LocalStateTxCborSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LocalStateTxCbor
     */
    omit?: LocalStateTxCborOmit<ExtArgs> | null
    /**
     * The data needed to update a LocalStateTxCbor.
     */
    data: XOR<LocalStateTxCborUpdateInput, LocalStateTxCborUncheckedUpdateInput>
    /**
     * Choose, which LocalStateTxCbor to update.
     */
    where: LocalStateTxCborWhereUniqueInput
  }

  /**
   * LocalStateTxCbor updateMany
   */
  export type LocalStateTxCborUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LocalStateTxCbors.
     */
    data: XOR<LocalStateTxCborUpdateManyMutationInput, LocalStateTxCborUncheckedUpdateManyInput>
    /**
     * Filter which LocalStateTxCbors to update
     */
    where?: LocalStateTxCborWhereInput
    /**
     * Limit how many LocalStateTxCbors to update.
     */
    limit?: number
  }

  /**
   * LocalStateTxCbor updateManyAndReturn
   */
  export type LocalStateTxCborUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocalStateTxCbor
     */
    select?: LocalStateTxCborSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LocalStateTxCbor
     */
    omit?: LocalStateTxCborOmit<ExtArgs> | null
    /**
     * The data used to update LocalStateTxCbors.
     */
    data: XOR<LocalStateTxCborUpdateManyMutationInput, LocalStateTxCborUncheckedUpdateManyInput>
    /**
     * Filter which LocalStateTxCbors to update
     */
    where?: LocalStateTxCborWhereInput
    /**
     * Limit how many LocalStateTxCbors to update.
     */
    limit?: number
  }

  /**
   * LocalStateTxCbor upsert
   */
  export type LocalStateTxCborUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocalStateTxCbor
     */
    select?: LocalStateTxCborSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LocalStateTxCbor
     */
    omit?: LocalStateTxCborOmit<ExtArgs> | null
    /**
     * The filter to search for the LocalStateTxCbor to update in case it exists.
     */
    where: LocalStateTxCborWhereUniqueInput
    /**
     * In case the LocalStateTxCbor found by the `where` argument doesn't exist, create a new LocalStateTxCbor with this data.
     */
    create: XOR<LocalStateTxCborCreateInput, LocalStateTxCborUncheckedCreateInput>
    /**
     * In case the LocalStateTxCbor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LocalStateTxCborUpdateInput, LocalStateTxCborUncheckedUpdateInput>
  }

  /**
   * LocalStateTxCbor delete
   */
  export type LocalStateTxCborDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocalStateTxCbor
     */
    select?: LocalStateTxCborSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LocalStateTxCbor
     */
    omit?: LocalStateTxCborOmit<ExtArgs> | null
    /**
     * Filter which LocalStateTxCbor to delete.
     */
    where: LocalStateTxCborWhereUniqueInput
  }

  /**
   * LocalStateTxCbor deleteMany
   */
  export type LocalStateTxCborDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LocalStateTxCbors to delete
     */
    where?: LocalStateTxCborWhereInput
    /**
     * Limit how many LocalStateTxCbors to delete.
     */
    limit?: number
  }

  /**
   * LocalStateTxCbor without action
   */
  export type LocalStateTxCborDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocalStateTxCbor
     */
    select?: LocalStateTxCborSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LocalStateTxCbor
     */
    omit?: LocalStateTxCborOmit<ExtArgs> | null
  }


  /**
   * Model LocalStateTxOutput
   */

  export type AggregateLocalStateTxOutput = {
    _count: LocalStateTxOutputCountAggregateOutputType | null
    _avg: LocalStateTxOutputAvgAggregateOutputType | null
    _sum: LocalStateTxOutputSumAggregateOutputType | null
    _min: LocalStateTxOutputMinAggregateOutputType | null
    _max: LocalStateTxOutputMaxAggregateOutputType | null
  }

  export type LocalStateTxOutputAvgAggregateOutputType = {
    id: number | null
    utxoId: number | null
  }

  export type LocalStateTxOutputSumAggregateOutputType = {
    id: number | null
    utxoId: number | null
  }

  export type LocalStateTxOutputMinAggregateOutputType = {
    id: number | null
    utxoId: number | null
    localStatePolicy: string | null
    validator: $Enums.ScriptCategory | null
    createdAt: Date | null
  }

  export type LocalStateTxOutputMaxAggregateOutputType = {
    id: number | null
    utxoId: number | null
    localStatePolicy: string | null
    validator: $Enums.ScriptCategory | null
    createdAt: Date | null
  }

  export type LocalStateTxOutputCountAggregateOutputType = {
    id: number
    utxoId: number
    localStatePolicy: number
    validator: number
    createdAt: number
    _all: number
  }


  export type LocalStateTxOutputAvgAggregateInputType = {
    id?: true
    utxoId?: true
  }

  export type LocalStateTxOutputSumAggregateInputType = {
    id?: true
    utxoId?: true
  }

  export type LocalStateTxOutputMinAggregateInputType = {
    id?: true
    utxoId?: true
    localStatePolicy?: true
    validator?: true
    createdAt?: true
  }

  export type LocalStateTxOutputMaxAggregateInputType = {
    id?: true
    utxoId?: true
    localStatePolicy?: true
    validator?: true
    createdAt?: true
  }

  export type LocalStateTxOutputCountAggregateInputType = {
    id?: true
    utxoId?: true
    localStatePolicy?: true
    validator?: true
    createdAt?: true
    _all?: true
  }

  export type LocalStateTxOutputAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LocalStateTxOutput to aggregate.
     */
    where?: LocalStateTxOutputWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LocalStateTxOutputs to fetch.
     */
    orderBy?: LocalStateTxOutputOrderByWithRelationInput | LocalStateTxOutputOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LocalStateTxOutputWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LocalStateTxOutputs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LocalStateTxOutputs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LocalStateTxOutputs
    **/
    _count?: true | LocalStateTxOutputCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LocalStateTxOutputAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LocalStateTxOutputSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LocalStateTxOutputMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LocalStateTxOutputMaxAggregateInputType
  }

  export type GetLocalStateTxOutputAggregateType<T extends LocalStateTxOutputAggregateArgs> = {
        [P in keyof T & keyof AggregateLocalStateTxOutput]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLocalStateTxOutput[P]>
      : GetScalarType<T[P], AggregateLocalStateTxOutput[P]>
  }




  export type LocalStateTxOutputGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LocalStateTxOutputWhereInput
    orderBy?: LocalStateTxOutputOrderByWithAggregationInput | LocalStateTxOutputOrderByWithAggregationInput[]
    by: LocalStateTxOutputScalarFieldEnum[] | LocalStateTxOutputScalarFieldEnum
    having?: LocalStateTxOutputScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LocalStateTxOutputCountAggregateInputType | true
    _avg?: LocalStateTxOutputAvgAggregateInputType
    _sum?: LocalStateTxOutputSumAggregateInputType
    _min?: LocalStateTxOutputMinAggregateInputType
    _max?: LocalStateTxOutputMaxAggregateInputType
  }

  export type LocalStateTxOutputGroupByOutputType = {
    id: number
    utxoId: number
    localStatePolicy: string
    validator: $Enums.ScriptCategory
    createdAt: Date
    _count: LocalStateTxOutputCountAggregateOutputType | null
    _avg: LocalStateTxOutputAvgAggregateOutputType | null
    _sum: LocalStateTxOutputSumAggregateOutputType | null
    _min: LocalStateTxOutputMinAggregateOutputType | null
    _max: LocalStateTxOutputMaxAggregateOutputType | null
  }

  type GetLocalStateTxOutputGroupByPayload<T extends LocalStateTxOutputGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LocalStateTxOutputGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LocalStateTxOutputGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LocalStateTxOutputGroupByOutputType[P]>
            : GetScalarType<T[P], LocalStateTxOutputGroupByOutputType[P]>
        }
      >
    >


  export type LocalStateTxOutputSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    utxoId?: boolean
    localStatePolicy?: boolean
    validator?: boolean
    createdAt?: boolean
    utxo?: boolean | UtxoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["localStateTxOutput"]>

  export type LocalStateTxOutputSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    utxoId?: boolean
    localStatePolicy?: boolean
    validator?: boolean
    createdAt?: boolean
    utxo?: boolean | UtxoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["localStateTxOutput"]>

  export type LocalStateTxOutputSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    utxoId?: boolean
    localStatePolicy?: boolean
    validator?: boolean
    createdAt?: boolean
    utxo?: boolean | UtxoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["localStateTxOutput"]>

  export type LocalStateTxOutputSelectScalar = {
    id?: boolean
    utxoId?: boolean
    localStatePolicy?: boolean
    validator?: boolean
    createdAt?: boolean
  }

  export type LocalStateTxOutputOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "utxoId" | "localStatePolicy" | "validator" | "createdAt", ExtArgs["result"]["localStateTxOutput"]>
  export type LocalStateTxOutputInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    utxo?: boolean | UtxoDefaultArgs<ExtArgs>
  }
  export type LocalStateTxOutputIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    utxo?: boolean | UtxoDefaultArgs<ExtArgs>
  }
  export type LocalStateTxOutputIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    utxo?: boolean | UtxoDefaultArgs<ExtArgs>
  }

  export type $LocalStateTxOutputPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LocalStateTxOutput"
    objects: {
      utxo: Prisma.$UtxoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      utxoId: number
      localStatePolicy: string
      validator: $Enums.ScriptCategory
      createdAt: Date
    }, ExtArgs["result"]["localStateTxOutput"]>
    composites: {}
  }

  type LocalStateTxOutputGetPayload<S extends boolean | null | undefined | LocalStateTxOutputDefaultArgs> = $Result.GetResult<Prisma.$LocalStateTxOutputPayload, S>

  type LocalStateTxOutputCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LocalStateTxOutputFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LocalStateTxOutputCountAggregateInputType | true
    }

  export interface LocalStateTxOutputDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LocalStateTxOutput'], meta: { name: 'LocalStateTxOutput' } }
    /**
     * Find zero or one LocalStateTxOutput that matches the filter.
     * @param {LocalStateTxOutputFindUniqueArgs} args - Arguments to find a LocalStateTxOutput
     * @example
     * // Get one LocalStateTxOutput
     * const localStateTxOutput = await prisma.localStateTxOutput.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LocalStateTxOutputFindUniqueArgs>(args: SelectSubset<T, LocalStateTxOutputFindUniqueArgs<ExtArgs>>): Prisma__LocalStateTxOutputClient<$Result.GetResult<Prisma.$LocalStateTxOutputPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LocalStateTxOutput that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LocalStateTxOutputFindUniqueOrThrowArgs} args - Arguments to find a LocalStateTxOutput
     * @example
     * // Get one LocalStateTxOutput
     * const localStateTxOutput = await prisma.localStateTxOutput.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LocalStateTxOutputFindUniqueOrThrowArgs>(args: SelectSubset<T, LocalStateTxOutputFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LocalStateTxOutputClient<$Result.GetResult<Prisma.$LocalStateTxOutputPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LocalStateTxOutput that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocalStateTxOutputFindFirstArgs} args - Arguments to find a LocalStateTxOutput
     * @example
     * // Get one LocalStateTxOutput
     * const localStateTxOutput = await prisma.localStateTxOutput.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LocalStateTxOutputFindFirstArgs>(args?: SelectSubset<T, LocalStateTxOutputFindFirstArgs<ExtArgs>>): Prisma__LocalStateTxOutputClient<$Result.GetResult<Prisma.$LocalStateTxOutputPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LocalStateTxOutput that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocalStateTxOutputFindFirstOrThrowArgs} args - Arguments to find a LocalStateTxOutput
     * @example
     * // Get one LocalStateTxOutput
     * const localStateTxOutput = await prisma.localStateTxOutput.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LocalStateTxOutputFindFirstOrThrowArgs>(args?: SelectSubset<T, LocalStateTxOutputFindFirstOrThrowArgs<ExtArgs>>): Prisma__LocalStateTxOutputClient<$Result.GetResult<Prisma.$LocalStateTxOutputPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LocalStateTxOutputs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocalStateTxOutputFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LocalStateTxOutputs
     * const localStateTxOutputs = await prisma.localStateTxOutput.findMany()
     * 
     * // Get first 10 LocalStateTxOutputs
     * const localStateTxOutputs = await prisma.localStateTxOutput.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const localStateTxOutputWithIdOnly = await prisma.localStateTxOutput.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LocalStateTxOutputFindManyArgs>(args?: SelectSubset<T, LocalStateTxOutputFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocalStateTxOutputPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LocalStateTxOutput.
     * @param {LocalStateTxOutputCreateArgs} args - Arguments to create a LocalStateTxOutput.
     * @example
     * // Create one LocalStateTxOutput
     * const LocalStateTxOutput = await prisma.localStateTxOutput.create({
     *   data: {
     *     // ... data to create a LocalStateTxOutput
     *   }
     * })
     * 
     */
    create<T extends LocalStateTxOutputCreateArgs>(args: SelectSubset<T, LocalStateTxOutputCreateArgs<ExtArgs>>): Prisma__LocalStateTxOutputClient<$Result.GetResult<Prisma.$LocalStateTxOutputPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LocalStateTxOutputs.
     * @param {LocalStateTxOutputCreateManyArgs} args - Arguments to create many LocalStateTxOutputs.
     * @example
     * // Create many LocalStateTxOutputs
     * const localStateTxOutput = await prisma.localStateTxOutput.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LocalStateTxOutputCreateManyArgs>(args?: SelectSubset<T, LocalStateTxOutputCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LocalStateTxOutputs and returns the data saved in the database.
     * @param {LocalStateTxOutputCreateManyAndReturnArgs} args - Arguments to create many LocalStateTxOutputs.
     * @example
     * // Create many LocalStateTxOutputs
     * const localStateTxOutput = await prisma.localStateTxOutput.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LocalStateTxOutputs and only return the `id`
     * const localStateTxOutputWithIdOnly = await prisma.localStateTxOutput.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LocalStateTxOutputCreateManyAndReturnArgs>(args?: SelectSubset<T, LocalStateTxOutputCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocalStateTxOutputPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LocalStateTxOutput.
     * @param {LocalStateTxOutputDeleteArgs} args - Arguments to delete one LocalStateTxOutput.
     * @example
     * // Delete one LocalStateTxOutput
     * const LocalStateTxOutput = await prisma.localStateTxOutput.delete({
     *   where: {
     *     // ... filter to delete one LocalStateTxOutput
     *   }
     * })
     * 
     */
    delete<T extends LocalStateTxOutputDeleteArgs>(args: SelectSubset<T, LocalStateTxOutputDeleteArgs<ExtArgs>>): Prisma__LocalStateTxOutputClient<$Result.GetResult<Prisma.$LocalStateTxOutputPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LocalStateTxOutput.
     * @param {LocalStateTxOutputUpdateArgs} args - Arguments to update one LocalStateTxOutput.
     * @example
     * // Update one LocalStateTxOutput
     * const localStateTxOutput = await prisma.localStateTxOutput.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LocalStateTxOutputUpdateArgs>(args: SelectSubset<T, LocalStateTxOutputUpdateArgs<ExtArgs>>): Prisma__LocalStateTxOutputClient<$Result.GetResult<Prisma.$LocalStateTxOutputPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LocalStateTxOutputs.
     * @param {LocalStateTxOutputDeleteManyArgs} args - Arguments to filter LocalStateTxOutputs to delete.
     * @example
     * // Delete a few LocalStateTxOutputs
     * const { count } = await prisma.localStateTxOutput.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LocalStateTxOutputDeleteManyArgs>(args?: SelectSubset<T, LocalStateTxOutputDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LocalStateTxOutputs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocalStateTxOutputUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LocalStateTxOutputs
     * const localStateTxOutput = await prisma.localStateTxOutput.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LocalStateTxOutputUpdateManyArgs>(args: SelectSubset<T, LocalStateTxOutputUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LocalStateTxOutputs and returns the data updated in the database.
     * @param {LocalStateTxOutputUpdateManyAndReturnArgs} args - Arguments to update many LocalStateTxOutputs.
     * @example
     * // Update many LocalStateTxOutputs
     * const localStateTxOutput = await prisma.localStateTxOutput.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LocalStateTxOutputs and only return the `id`
     * const localStateTxOutputWithIdOnly = await prisma.localStateTxOutput.updateManyAndReturn({
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
    updateManyAndReturn<T extends LocalStateTxOutputUpdateManyAndReturnArgs>(args: SelectSubset<T, LocalStateTxOutputUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocalStateTxOutputPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LocalStateTxOutput.
     * @param {LocalStateTxOutputUpsertArgs} args - Arguments to update or create a LocalStateTxOutput.
     * @example
     * // Update or create a LocalStateTxOutput
     * const localStateTxOutput = await prisma.localStateTxOutput.upsert({
     *   create: {
     *     // ... data to create a LocalStateTxOutput
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LocalStateTxOutput we want to update
     *   }
     * })
     */
    upsert<T extends LocalStateTxOutputUpsertArgs>(args: SelectSubset<T, LocalStateTxOutputUpsertArgs<ExtArgs>>): Prisma__LocalStateTxOutputClient<$Result.GetResult<Prisma.$LocalStateTxOutputPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LocalStateTxOutputs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocalStateTxOutputCountArgs} args - Arguments to filter LocalStateTxOutputs to count.
     * @example
     * // Count the number of LocalStateTxOutputs
     * const count = await prisma.localStateTxOutput.count({
     *   where: {
     *     // ... the filter for the LocalStateTxOutputs we want to count
     *   }
     * })
    **/
    count<T extends LocalStateTxOutputCountArgs>(
      args?: Subset<T, LocalStateTxOutputCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LocalStateTxOutputCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LocalStateTxOutput.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocalStateTxOutputAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LocalStateTxOutputAggregateArgs>(args: Subset<T, LocalStateTxOutputAggregateArgs>): Prisma.PrismaPromise<GetLocalStateTxOutputAggregateType<T>>

    /**
     * Group by LocalStateTxOutput.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocalStateTxOutputGroupByArgs} args - Group by arguments.
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
      T extends LocalStateTxOutputGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LocalStateTxOutputGroupByArgs['orderBy'] }
        : { orderBy?: LocalStateTxOutputGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LocalStateTxOutputGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLocalStateTxOutputGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LocalStateTxOutput model
   */
  readonly fields: LocalStateTxOutputFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LocalStateTxOutput.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LocalStateTxOutputClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    utxo<T extends UtxoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UtxoDefaultArgs<ExtArgs>>): Prisma__UtxoClient<$Result.GetResult<Prisma.$UtxoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the LocalStateTxOutput model
   */
  interface LocalStateTxOutputFieldRefs {
    readonly id: FieldRef<"LocalStateTxOutput", 'Int'>
    readonly utxoId: FieldRef<"LocalStateTxOutput", 'Int'>
    readonly localStatePolicy: FieldRef<"LocalStateTxOutput", 'String'>
    readonly validator: FieldRef<"LocalStateTxOutput", 'ScriptCategory'>
    readonly createdAt: FieldRef<"LocalStateTxOutput", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LocalStateTxOutput findUnique
   */
  export type LocalStateTxOutputFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocalStateTxOutput
     */
    select?: LocalStateTxOutputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LocalStateTxOutput
     */
    omit?: LocalStateTxOutputOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocalStateTxOutputInclude<ExtArgs> | null
    /**
     * Filter, which LocalStateTxOutput to fetch.
     */
    where: LocalStateTxOutputWhereUniqueInput
  }

  /**
   * LocalStateTxOutput findUniqueOrThrow
   */
  export type LocalStateTxOutputFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocalStateTxOutput
     */
    select?: LocalStateTxOutputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LocalStateTxOutput
     */
    omit?: LocalStateTxOutputOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocalStateTxOutputInclude<ExtArgs> | null
    /**
     * Filter, which LocalStateTxOutput to fetch.
     */
    where: LocalStateTxOutputWhereUniqueInput
  }

  /**
   * LocalStateTxOutput findFirst
   */
  export type LocalStateTxOutputFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocalStateTxOutput
     */
    select?: LocalStateTxOutputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LocalStateTxOutput
     */
    omit?: LocalStateTxOutputOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocalStateTxOutputInclude<ExtArgs> | null
    /**
     * Filter, which LocalStateTxOutput to fetch.
     */
    where?: LocalStateTxOutputWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LocalStateTxOutputs to fetch.
     */
    orderBy?: LocalStateTxOutputOrderByWithRelationInput | LocalStateTxOutputOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LocalStateTxOutputs.
     */
    cursor?: LocalStateTxOutputWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LocalStateTxOutputs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LocalStateTxOutputs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LocalStateTxOutputs.
     */
    distinct?: LocalStateTxOutputScalarFieldEnum | LocalStateTxOutputScalarFieldEnum[]
  }

  /**
   * LocalStateTxOutput findFirstOrThrow
   */
  export type LocalStateTxOutputFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocalStateTxOutput
     */
    select?: LocalStateTxOutputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LocalStateTxOutput
     */
    omit?: LocalStateTxOutputOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocalStateTxOutputInclude<ExtArgs> | null
    /**
     * Filter, which LocalStateTxOutput to fetch.
     */
    where?: LocalStateTxOutputWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LocalStateTxOutputs to fetch.
     */
    orderBy?: LocalStateTxOutputOrderByWithRelationInput | LocalStateTxOutputOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LocalStateTxOutputs.
     */
    cursor?: LocalStateTxOutputWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LocalStateTxOutputs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LocalStateTxOutputs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LocalStateTxOutputs.
     */
    distinct?: LocalStateTxOutputScalarFieldEnum | LocalStateTxOutputScalarFieldEnum[]
  }

  /**
   * LocalStateTxOutput findMany
   */
  export type LocalStateTxOutputFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocalStateTxOutput
     */
    select?: LocalStateTxOutputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LocalStateTxOutput
     */
    omit?: LocalStateTxOutputOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocalStateTxOutputInclude<ExtArgs> | null
    /**
     * Filter, which LocalStateTxOutputs to fetch.
     */
    where?: LocalStateTxOutputWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LocalStateTxOutputs to fetch.
     */
    orderBy?: LocalStateTxOutputOrderByWithRelationInput | LocalStateTxOutputOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LocalStateTxOutputs.
     */
    cursor?: LocalStateTxOutputWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LocalStateTxOutputs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LocalStateTxOutputs.
     */
    skip?: number
    distinct?: LocalStateTxOutputScalarFieldEnum | LocalStateTxOutputScalarFieldEnum[]
  }

  /**
   * LocalStateTxOutput create
   */
  export type LocalStateTxOutputCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocalStateTxOutput
     */
    select?: LocalStateTxOutputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LocalStateTxOutput
     */
    omit?: LocalStateTxOutputOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocalStateTxOutputInclude<ExtArgs> | null
    /**
     * The data needed to create a LocalStateTxOutput.
     */
    data: XOR<LocalStateTxOutputCreateInput, LocalStateTxOutputUncheckedCreateInput>
  }

  /**
   * LocalStateTxOutput createMany
   */
  export type LocalStateTxOutputCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LocalStateTxOutputs.
     */
    data: LocalStateTxOutputCreateManyInput | LocalStateTxOutputCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LocalStateTxOutput createManyAndReturn
   */
  export type LocalStateTxOutputCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocalStateTxOutput
     */
    select?: LocalStateTxOutputSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LocalStateTxOutput
     */
    omit?: LocalStateTxOutputOmit<ExtArgs> | null
    /**
     * The data used to create many LocalStateTxOutputs.
     */
    data: LocalStateTxOutputCreateManyInput | LocalStateTxOutputCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocalStateTxOutputIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LocalStateTxOutput update
   */
  export type LocalStateTxOutputUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocalStateTxOutput
     */
    select?: LocalStateTxOutputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LocalStateTxOutput
     */
    omit?: LocalStateTxOutputOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocalStateTxOutputInclude<ExtArgs> | null
    /**
     * The data needed to update a LocalStateTxOutput.
     */
    data: XOR<LocalStateTxOutputUpdateInput, LocalStateTxOutputUncheckedUpdateInput>
    /**
     * Choose, which LocalStateTxOutput to update.
     */
    where: LocalStateTxOutputWhereUniqueInput
  }

  /**
   * LocalStateTxOutput updateMany
   */
  export type LocalStateTxOutputUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LocalStateTxOutputs.
     */
    data: XOR<LocalStateTxOutputUpdateManyMutationInput, LocalStateTxOutputUncheckedUpdateManyInput>
    /**
     * Filter which LocalStateTxOutputs to update
     */
    where?: LocalStateTxOutputWhereInput
    /**
     * Limit how many LocalStateTxOutputs to update.
     */
    limit?: number
  }

  /**
   * LocalStateTxOutput updateManyAndReturn
   */
  export type LocalStateTxOutputUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocalStateTxOutput
     */
    select?: LocalStateTxOutputSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LocalStateTxOutput
     */
    omit?: LocalStateTxOutputOmit<ExtArgs> | null
    /**
     * The data used to update LocalStateTxOutputs.
     */
    data: XOR<LocalStateTxOutputUpdateManyMutationInput, LocalStateTxOutputUncheckedUpdateManyInput>
    /**
     * Filter which LocalStateTxOutputs to update
     */
    where?: LocalStateTxOutputWhereInput
    /**
     * Limit how many LocalStateTxOutputs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocalStateTxOutputIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LocalStateTxOutput upsert
   */
  export type LocalStateTxOutputUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocalStateTxOutput
     */
    select?: LocalStateTxOutputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LocalStateTxOutput
     */
    omit?: LocalStateTxOutputOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocalStateTxOutputInclude<ExtArgs> | null
    /**
     * The filter to search for the LocalStateTxOutput to update in case it exists.
     */
    where: LocalStateTxOutputWhereUniqueInput
    /**
     * In case the LocalStateTxOutput found by the `where` argument doesn't exist, create a new LocalStateTxOutput with this data.
     */
    create: XOR<LocalStateTxOutputCreateInput, LocalStateTxOutputUncheckedCreateInput>
    /**
     * In case the LocalStateTxOutput was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LocalStateTxOutputUpdateInput, LocalStateTxOutputUncheckedUpdateInput>
  }

  /**
   * LocalStateTxOutput delete
   */
  export type LocalStateTxOutputDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocalStateTxOutput
     */
    select?: LocalStateTxOutputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LocalStateTxOutput
     */
    omit?: LocalStateTxOutputOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocalStateTxOutputInclude<ExtArgs> | null
    /**
     * Filter which LocalStateTxOutput to delete.
     */
    where: LocalStateTxOutputWhereUniqueInput
  }

  /**
   * LocalStateTxOutput deleteMany
   */
  export type LocalStateTxOutputDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LocalStateTxOutputs to delete
     */
    where?: LocalStateTxOutputWhereInput
    /**
     * Limit how many LocalStateTxOutputs to delete.
     */
    limit?: number
  }

  /**
   * LocalStateTxOutput without action
   */
  export type LocalStateTxOutputDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocalStateTxOutput
     */
    select?: LocalStateTxOutputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LocalStateTxOutput
     */
    omit?: LocalStateTxOutputOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocalStateTxOutputInclude<ExtArgs> | null
  }


  /**
   * Model TransactionSyncTip
   */

  export type AggregateTransactionSyncTip = {
    _count: TransactionSyncTipCountAggregateOutputType | null
    _avg: TransactionSyncTipAvgAggregateOutputType | null
    _sum: TransactionSyncTipSumAggregateOutputType | null
    _min: TransactionSyncTipMinAggregateOutputType | null
    _max: TransactionSyncTipMaxAggregateOutputType | null
  }

  export type TransactionSyncTipAvgAggregateOutputType = {
    id: number | null
    slot: number | null
  }

  export type TransactionSyncTipSumAggregateOutputType = {
    id: number | null
    slot: number | null
  }

  export type TransactionSyncTipMinAggregateOutputType = {
    id: number | null
    slot: number | null
    blockHash: string | null
  }

  export type TransactionSyncTipMaxAggregateOutputType = {
    id: number | null
    slot: number | null
    blockHash: string | null
  }

  export type TransactionSyncTipCountAggregateOutputType = {
    id: number
    slot: number
    blockHash: number
    _all: number
  }


  export type TransactionSyncTipAvgAggregateInputType = {
    id?: true
    slot?: true
  }

  export type TransactionSyncTipSumAggregateInputType = {
    id?: true
    slot?: true
  }

  export type TransactionSyncTipMinAggregateInputType = {
    id?: true
    slot?: true
    blockHash?: true
  }

  export type TransactionSyncTipMaxAggregateInputType = {
    id?: true
    slot?: true
    blockHash?: true
  }

  export type TransactionSyncTipCountAggregateInputType = {
    id?: true
    slot?: true
    blockHash?: true
    _all?: true
  }

  export type TransactionSyncTipAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TransactionSyncTip to aggregate.
     */
    where?: TransactionSyncTipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TransactionSyncTips to fetch.
     */
    orderBy?: TransactionSyncTipOrderByWithRelationInput | TransactionSyncTipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TransactionSyncTipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TransactionSyncTips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TransactionSyncTips.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TransactionSyncTips
    **/
    _count?: true | TransactionSyncTipCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TransactionSyncTipAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TransactionSyncTipSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransactionSyncTipMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransactionSyncTipMaxAggregateInputType
  }

  export type GetTransactionSyncTipAggregateType<T extends TransactionSyncTipAggregateArgs> = {
        [P in keyof T & keyof AggregateTransactionSyncTip]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransactionSyncTip[P]>
      : GetScalarType<T[P], AggregateTransactionSyncTip[P]>
  }




  export type TransactionSyncTipGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionSyncTipWhereInput
    orderBy?: TransactionSyncTipOrderByWithAggregationInput | TransactionSyncTipOrderByWithAggregationInput[]
    by: TransactionSyncTipScalarFieldEnum[] | TransactionSyncTipScalarFieldEnum
    having?: TransactionSyncTipScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransactionSyncTipCountAggregateInputType | true
    _avg?: TransactionSyncTipAvgAggregateInputType
    _sum?: TransactionSyncTipSumAggregateInputType
    _min?: TransactionSyncTipMinAggregateInputType
    _max?: TransactionSyncTipMaxAggregateInputType
  }

  export type TransactionSyncTipGroupByOutputType = {
    id: number
    slot: number
    blockHash: string
    _count: TransactionSyncTipCountAggregateOutputType | null
    _avg: TransactionSyncTipAvgAggregateOutputType | null
    _sum: TransactionSyncTipSumAggregateOutputType | null
    _min: TransactionSyncTipMinAggregateOutputType | null
    _max: TransactionSyncTipMaxAggregateOutputType | null
  }

  type GetTransactionSyncTipGroupByPayload<T extends TransactionSyncTipGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransactionSyncTipGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransactionSyncTipGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransactionSyncTipGroupByOutputType[P]>
            : GetScalarType<T[P], TransactionSyncTipGroupByOutputType[P]>
        }
      >
    >


  export type TransactionSyncTipSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slot?: boolean
    blockHash?: boolean
  }, ExtArgs["result"]["transactionSyncTip"]>

  export type TransactionSyncTipSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slot?: boolean
    blockHash?: boolean
  }, ExtArgs["result"]["transactionSyncTip"]>

  export type TransactionSyncTipSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slot?: boolean
    blockHash?: boolean
  }, ExtArgs["result"]["transactionSyncTip"]>

  export type TransactionSyncTipSelectScalar = {
    id?: boolean
    slot?: boolean
    blockHash?: boolean
  }

  export type TransactionSyncTipOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "slot" | "blockHash", ExtArgs["result"]["transactionSyncTip"]>

  export type $TransactionSyncTipPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TransactionSyncTip"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      slot: number
      blockHash: string
    }, ExtArgs["result"]["transactionSyncTip"]>
    composites: {}
  }

  type TransactionSyncTipGetPayload<S extends boolean | null | undefined | TransactionSyncTipDefaultArgs> = $Result.GetResult<Prisma.$TransactionSyncTipPayload, S>

  type TransactionSyncTipCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TransactionSyncTipFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TransactionSyncTipCountAggregateInputType | true
    }

  export interface TransactionSyncTipDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TransactionSyncTip'], meta: { name: 'TransactionSyncTip' } }
    /**
     * Find zero or one TransactionSyncTip that matches the filter.
     * @param {TransactionSyncTipFindUniqueArgs} args - Arguments to find a TransactionSyncTip
     * @example
     * // Get one TransactionSyncTip
     * const transactionSyncTip = await prisma.transactionSyncTip.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TransactionSyncTipFindUniqueArgs>(args: SelectSubset<T, TransactionSyncTipFindUniqueArgs<ExtArgs>>): Prisma__TransactionSyncTipClient<$Result.GetResult<Prisma.$TransactionSyncTipPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TransactionSyncTip that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TransactionSyncTipFindUniqueOrThrowArgs} args - Arguments to find a TransactionSyncTip
     * @example
     * // Get one TransactionSyncTip
     * const transactionSyncTip = await prisma.transactionSyncTip.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TransactionSyncTipFindUniqueOrThrowArgs>(args: SelectSubset<T, TransactionSyncTipFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TransactionSyncTipClient<$Result.GetResult<Prisma.$TransactionSyncTipPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TransactionSyncTip that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionSyncTipFindFirstArgs} args - Arguments to find a TransactionSyncTip
     * @example
     * // Get one TransactionSyncTip
     * const transactionSyncTip = await prisma.transactionSyncTip.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TransactionSyncTipFindFirstArgs>(args?: SelectSubset<T, TransactionSyncTipFindFirstArgs<ExtArgs>>): Prisma__TransactionSyncTipClient<$Result.GetResult<Prisma.$TransactionSyncTipPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TransactionSyncTip that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionSyncTipFindFirstOrThrowArgs} args - Arguments to find a TransactionSyncTip
     * @example
     * // Get one TransactionSyncTip
     * const transactionSyncTip = await prisma.transactionSyncTip.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TransactionSyncTipFindFirstOrThrowArgs>(args?: SelectSubset<T, TransactionSyncTipFindFirstOrThrowArgs<ExtArgs>>): Prisma__TransactionSyncTipClient<$Result.GetResult<Prisma.$TransactionSyncTipPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TransactionSyncTips that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionSyncTipFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TransactionSyncTips
     * const transactionSyncTips = await prisma.transactionSyncTip.findMany()
     * 
     * // Get first 10 TransactionSyncTips
     * const transactionSyncTips = await prisma.transactionSyncTip.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transactionSyncTipWithIdOnly = await prisma.transactionSyncTip.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TransactionSyncTipFindManyArgs>(args?: SelectSubset<T, TransactionSyncTipFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionSyncTipPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TransactionSyncTip.
     * @param {TransactionSyncTipCreateArgs} args - Arguments to create a TransactionSyncTip.
     * @example
     * // Create one TransactionSyncTip
     * const TransactionSyncTip = await prisma.transactionSyncTip.create({
     *   data: {
     *     // ... data to create a TransactionSyncTip
     *   }
     * })
     * 
     */
    create<T extends TransactionSyncTipCreateArgs>(args: SelectSubset<T, TransactionSyncTipCreateArgs<ExtArgs>>): Prisma__TransactionSyncTipClient<$Result.GetResult<Prisma.$TransactionSyncTipPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TransactionSyncTips.
     * @param {TransactionSyncTipCreateManyArgs} args - Arguments to create many TransactionSyncTips.
     * @example
     * // Create many TransactionSyncTips
     * const transactionSyncTip = await prisma.transactionSyncTip.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TransactionSyncTipCreateManyArgs>(args?: SelectSubset<T, TransactionSyncTipCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TransactionSyncTips and returns the data saved in the database.
     * @param {TransactionSyncTipCreateManyAndReturnArgs} args - Arguments to create many TransactionSyncTips.
     * @example
     * // Create many TransactionSyncTips
     * const transactionSyncTip = await prisma.transactionSyncTip.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TransactionSyncTips and only return the `id`
     * const transactionSyncTipWithIdOnly = await prisma.transactionSyncTip.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TransactionSyncTipCreateManyAndReturnArgs>(args?: SelectSubset<T, TransactionSyncTipCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionSyncTipPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TransactionSyncTip.
     * @param {TransactionSyncTipDeleteArgs} args - Arguments to delete one TransactionSyncTip.
     * @example
     * // Delete one TransactionSyncTip
     * const TransactionSyncTip = await prisma.transactionSyncTip.delete({
     *   where: {
     *     // ... filter to delete one TransactionSyncTip
     *   }
     * })
     * 
     */
    delete<T extends TransactionSyncTipDeleteArgs>(args: SelectSubset<T, TransactionSyncTipDeleteArgs<ExtArgs>>): Prisma__TransactionSyncTipClient<$Result.GetResult<Prisma.$TransactionSyncTipPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TransactionSyncTip.
     * @param {TransactionSyncTipUpdateArgs} args - Arguments to update one TransactionSyncTip.
     * @example
     * // Update one TransactionSyncTip
     * const transactionSyncTip = await prisma.transactionSyncTip.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TransactionSyncTipUpdateArgs>(args: SelectSubset<T, TransactionSyncTipUpdateArgs<ExtArgs>>): Prisma__TransactionSyncTipClient<$Result.GetResult<Prisma.$TransactionSyncTipPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TransactionSyncTips.
     * @param {TransactionSyncTipDeleteManyArgs} args - Arguments to filter TransactionSyncTips to delete.
     * @example
     * // Delete a few TransactionSyncTips
     * const { count } = await prisma.transactionSyncTip.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TransactionSyncTipDeleteManyArgs>(args?: SelectSubset<T, TransactionSyncTipDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TransactionSyncTips.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionSyncTipUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TransactionSyncTips
     * const transactionSyncTip = await prisma.transactionSyncTip.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TransactionSyncTipUpdateManyArgs>(args: SelectSubset<T, TransactionSyncTipUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TransactionSyncTips and returns the data updated in the database.
     * @param {TransactionSyncTipUpdateManyAndReturnArgs} args - Arguments to update many TransactionSyncTips.
     * @example
     * // Update many TransactionSyncTips
     * const transactionSyncTip = await prisma.transactionSyncTip.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TransactionSyncTips and only return the `id`
     * const transactionSyncTipWithIdOnly = await prisma.transactionSyncTip.updateManyAndReturn({
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
    updateManyAndReturn<T extends TransactionSyncTipUpdateManyAndReturnArgs>(args: SelectSubset<T, TransactionSyncTipUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionSyncTipPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TransactionSyncTip.
     * @param {TransactionSyncTipUpsertArgs} args - Arguments to update or create a TransactionSyncTip.
     * @example
     * // Update or create a TransactionSyncTip
     * const transactionSyncTip = await prisma.transactionSyncTip.upsert({
     *   create: {
     *     // ... data to create a TransactionSyncTip
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TransactionSyncTip we want to update
     *   }
     * })
     */
    upsert<T extends TransactionSyncTipUpsertArgs>(args: SelectSubset<T, TransactionSyncTipUpsertArgs<ExtArgs>>): Prisma__TransactionSyncTipClient<$Result.GetResult<Prisma.$TransactionSyncTipPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TransactionSyncTips.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionSyncTipCountArgs} args - Arguments to filter TransactionSyncTips to count.
     * @example
     * // Count the number of TransactionSyncTips
     * const count = await prisma.transactionSyncTip.count({
     *   where: {
     *     // ... the filter for the TransactionSyncTips we want to count
     *   }
     * })
    **/
    count<T extends TransactionSyncTipCountArgs>(
      args?: Subset<T, TransactionSyncTipCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransactionSyncTipCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TransactionSyncTip.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionSyncTipAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TransactionSyncTipAggregateArgs>(args: Subset<T, TransactionSyncTipAggregateArgs>): Prisma.PrismaPromise<GetTransactionSyncTipAggregateType<T>>

    /**
     * Group by TransactionSyncTip.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionSyncTipGroupByArgs} args - Group by arguments.
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
      T extends TransactionSyncTipGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TransactionSyncTipGroupByArgs['orderBy'] }
        : { orderBy?: TransactionSyncTipGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TransactionSyncTipGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransactionSyncTipGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TransactionSyncTip model
   */
  readonly fields: TransactionSyncTipFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TransactionSyncTip.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TransactionSyncTipClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the TransactionSyncTip model
   */
  interface TransactionSyncTipFieldRefs {
    readonly id: FieldRef<"TransactionSyncTip", 'Int'>
    readonly slot: FieldRef<"TransactionSyncTip", 'Int'>
    readonly blockHash: FieldRef<"TransactionSyncTip", 'String'>
  }
    

  // Custom InputTypes
  /**
   * TransactionSyncTip findUnique
   */
  export type TransactionSyncTipFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionSyncTip
     */
    select?: TransactionSyncTipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionSyncTip
     */
    omit?: TransactionSyncTipOmit<ExtArgs> | null
    /**
     * Filter, which TransactionSyncTip to fetch.
     */
    where: TransactionSyncTipWhereUniqueInput
  }

  /**
   * TransactionSyncTip findUniqueOrThrow
   */
  export type TransactionSyncTipFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionSyncTip
     */
    select?: TransactionSyncTipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionSyncTip
     */
    omit?: TransactionSyncTipOmit<ExtArgs> | null
    /**
     * Filter, which TransactionSyncTip to fetch.
     */
    where: TransactionSyncTipWhereUniqueInput
  }

  /**
   * TransactionSyncTip findFirst
   */
  export type TransactionSyncTipFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionSyncTip
     */
    select?: TransactionSyncTipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionSyncTip
     */
    omit?: TransactionSyncTipOmit<ExtArgs> | null
    /**
     * Filter, which TransactionSyncTip to fetch.
     */
    where?: TransactionSyncTipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TransactionSyncTips to fetch.
     */
    orderBy?: TransactionSyncTipOrderByWithRelationInput | TransactionSyncTipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TransactionSyncTips.
     */
    cursor?: TransactionSyncTipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TransactionSyncTips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TransactionSyncTips.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TransactionSyncTips.
     */
    distinct?: TransactionSyncTipScalarFieldEnum | TransactionSyncTipScalarFieldEnum[]
  }

  /**
   * TransactionSyncTip findFirstOrThrow
   */
  export type TransactionSyncTipFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionSyncTip
     */
    select?: TransactionSyncTipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionSyncTip
     */
    omit?: TransactionSyncTipOmit<ExtArgs> | null
    /**
     * Filter, which TransactionSyncTip to fetch.
     */
    where?: TransactionSyncTipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TransactionSyncTips to fetch.
     */
    orderBy?: TransactionSyncTipOrderByWithRelationInput | TransactionSyncTipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TransactionSyncTips.
     */
    cursor?: TransactionSyncTipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TransactionSyncTips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TransactionSyncTips.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TransactionSyncTips.
     */
    distinct?: TransactionSyncTipScalarFieldEnum | TransactionSyncTipScalarFieldEnum[]
  }

  /**
   * TransactionSyncTip findMany
   */
  export type TransactionSyncTipFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionSyncTip
     */
    select?: TransactionSyncTipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionSyncTip
     */
    omit?: TransactionSyncTipOmit<ExtArgs> | null
    /**
     * Filter, which TransactionSyncTips to fetch.
     */
    where?: TransactionSyncTipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TransactionSyncTips to fetch.
     */
    orderBy?: TransactionSyncTipOrderByWithRelationInput | TransactionSyncTipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TransactionSyncTips.
     */
    cursor?: TransactionSyncTipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TransactionSyncTips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TransactionSyncTips.
     */
    skip?: number
    distinct?: TransactionSyncTipScalarFieldEnum | TransactionSyncTipScalarFieldEnum[]
  }

  /**
   * TransactionSyncTip create
   */
  export type TransactionSyncTipCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionSyncTip
     */
    select?: TransactionSyncTipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionSyncTip
     */
    omit?: TransactionSyncTipOmit<ExtArgs> | null
    /**
     * The data needed to create a TransactionSyncTip.
     */
    data: XOR<TransactionSyncTipCreateInput, TransactionSyncTipUncheckedCreateInput>
  }

  /**
   * TransactionSyncTip createMany
   */
  export type TransactionSyncTipCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TransactionSyncTips.
     */
    data: TransactionSyncTipCreateManyInput | TransactionSyncTipCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TransactionSyncTip createManyAndReturn
   */
  export type TransactionSyncTipCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionSyncTip
     */
    select?: TransactionSyncTipSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionSyncTip
     */
    omit?: TransactionSyncTipOmit<ExtArgs> | null
    /**
     * The data used to create many TransactionSyncTips.
     */
    data: TransactionSyncTipCreateManyInput | TransactionSyncTipCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TransactionSyncTip update
   */
  export type TransactionSyncTipUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionSyncTip
     */
    select?: TransactionSyncTipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionSyncTip
     */
    omit?: TransactionSyncTipOmit<ExtArgs> | null
    /**
     * The data needed to update a TransactionSyncTip.
     */
    data: XOR<TransactionSyncTipUpdateInput, TransactionSyncTipUncheckedUpdateInput>
    /**
     * Choose, which TransactionSyncTip to update.
     */
    where: TransactionSyncTipWhereUniqueInput
  }

  /**
   * TransactionSyncTip updateMany
   */
  export type TransactionSyncTipUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TransactionSyncTips.
     */
    data: XOR<TransactionSyncTipUpdateManyMutationInput, TransactionSyncTipUncheckedUpdateManyInput>
    /**
     * Filter which TransactionSyncTips to update
     */
    where?: TransactionSyncTipWhereInput
    /**
     * Limit how many TransactionSyncTips to update.
     */
    limit?: number
  }

  /**
   * TransactionSyncTip updateManyAndReturn
   */
  export type TransactionSyncTipUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionSyncTip
     */
    select?: TransactionSyncTipSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionSyncTip
     */
    omit?: TransactionSyncTipOmit<ExtArgs> | null
    /**
     * The data used to update TransactionSyncTips.
     */
    data: XOR<TransactionSyncTipUpdateManyMutationInput, TransactionSyncTipUncheckedUpdateManyInput>
    /**
     * Filter which TransactionSyncTips to update
     */
    where?: TransactionSyncTipWhereInput
    /**
     * Limit how many TransactionSyncTips to update.
     */
    limit?: number
  }

  /**
   * TransactionSyncTip upsert
   */
  export type TransactionSyncTipUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionSyncTip
     */
    select?: TransactionSyncTipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionSyncTip
     */
    omit?: TransactionSyncTipOmit<ExtArgs> | null
    /**
     * The filter to search for the TransactionSyncTip to update in case it exists.
     */
    where: TransactionSyncTipWhereUniqueInput
    /**
     * In case the TransactionSyncTip found by the `where` argument doesn't exist, create a new TransactionSyncTip with this data.
     */
    create: XOR<TransactionSyncTipCreateInput, TransactionSyncTipUncheckedCreateInput>
    /**
     * In case the TransactionSyncTip was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TransactionSyncTipUpdateInput, TransactionSyncTipUncheckedUpdateInput>
  }

  /**
   * TransactionSyncTip delete
   */
  export type TransactionSyncTipDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionSyncTip
     */
    select?: TransactionSyncTipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionSyncTip
     */
    omit?: TransactionSyncTipOmit<ExtArgs> | null
    /**
     * Filter which TransactionSyncTip to delete.
     */
    where: TransactionSyncTipWhereUniqueInput
  }

  /**
   * TransactionSyncTip deleteMany
   */
  export type TransactionSyncTipDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TransactionSyncTips to delete
     */
    where?: TransactionSyncTipWhereInput
    /**
     * Limit how many TransactionSyncTips to delete.
     */
    limit?: number
  }

  /**
   * TransactionSyncTip without action
   */
  export type TransactionSyncTipDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionSyncTip
     */
    select?: TransactionSyncTipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionSyncTip
     */
    omit?: TransactionSyncTipOmit<ExtArgs> | null
  }


  /**
   * Model Utxo
   */

  export type AggregateUtxo = {
    _count: UtxoCountAggregateOutputType | null
    _avg: UtxoAvgAggregateOutputType | null
    _sum: UtxoSumAggregateOutputType | null
    _min: UtxoMinAggregateOutputType | null
    _max: UtxoMaxAggregateOutputType | null
  }

  export type UtxoAvgAggregateOutputType = {
    id: number | null
    index: number | null
    coin: number | null
  }

  export type UtxoSumAggregateOutputType = {
    id: number | null
    index: number | null
    coin: bigint | null
  }

  export type UtxoMinAggregateOutputType = {
    id: number | null
    txHash: string | null
    index: number | null
    address: string | null
    plutusData: string | null
    scriptRef: string | null
    coin: bigint | null
  }

  export type UtxoMaxAggregateOutputType = {
    id: number | null
    txHash: string | null
    index: number | null
    address: string | null
    plutusData: string | null
    scriptRef: string | null
    coin: bigint | null
  }

  export type UtxoCountAggregateOutputType = {
    id: number
    txHash: number
    index: number
    address: number
    plutusData: number
    scriptRef: number
    coin: number
    _all: number
  }


  export type UtxoAvgAggregateInputType = {
    id?: true
    index?: true
    coin?: true
  }

  export type UtxoSumAggregateInputType = {
    id?: true
    index?: true
    coin?: true
  }

  export type UtxoMinAggregateInputType = {
    id?: true
    txHash?: true
    index?: true
    address?: true
    plutusData?: true
    scriptRef?: true
    coin?: true
  }

  export type UtxoMaxAggregateInputType = {
    id?: true
    txHash?: true
    index?: true
    address?: true
    plutusData?: true
    scriptRef?: true
    coin?: true
  }

  export type UtxoCountAggregateInputType = {
    id?: true
    txHash?: true
    index?: true
    address?: true
    plutusData?: true
    scriptRef?: true
    coin?: true
    _all?: true
  }

  export type UtxoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Utxo to aggregate.
     */
    where?: UtxoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Utxos to fetch.
     */
    orderBy?: UtxoOrderByWithRelationInput | UtxoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UtxoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Utxos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Utxos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Utxos
    **/
    _count?: true | UtxoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UtxoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UtxoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UtxoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UtxoMaxAggregateInputType
  }

  export type GetUtxoAggregateType<T extends UtxoAggregateArgs> = {
        [P in keyof T & keyof AggregateUtxo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUtxo[P]>
      : GetScalarType<T[P], AggregateUtxo[P]>
  }




  export type UtxoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UtxoWhereInput
    orderBy?: UtxoOrderByWithAggregationInput | UtxoOrderByWithAggregationInput[]
    by: UtxoScalarFieldEnum[] | UtxoScalarFieldEnum
    having?: UtxoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UtxoCountAggregateInputType | true
    _avg?: UtxoAvgAggregateInputType
    _sum?: UtxoSumAggregateInputType
    _min?: UtxoMinAggregateInputType
    _max?: UtxoMaxAggregateInputType
  }

  export type UtxoGroupByOutputType = {
    id: number
    txHash: string
    index: number
    address: string
    plutusData: string | null
    scriptRef: string | null
    coin: bigint
    _count: UtxoCountAggregateOutputType | null
    _avg: UtxoAvgAggregateOutputType | null
    _sum: UtxoSumAggregateOutputType | null
    _min: UtxoMinAggregateOutputType | null
    _max: UtxoMaxAggregateOutputType | null
  }

  type GetUtxoGroupByPayload<T extends UtxoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UtxoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UtxoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UtxoGroupByOutputType[P]>
            : GetScalarType<T[P], UtxoGroupByOutputType[P]>
        }
      >
    >


  export type UtxoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    txHash?: boolean
    index?: boolean
    address?: boolean
    plutusData?: boolean
    scriptRef?: boolean
    coin?: boolean
    MultiAsset?: boolean | Utxo$MultiAssetArgs<ExtArgs>
    NetworkTxOutput?: boolean | Utxo$NetworkTxOutputArgs<ExtArgs>
    LocalStateTxOutput?: boolean | Utxo$LocalStateTxOutputArgs<ExtArgs>
    _count?: boolean | UtxoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["utxo"]>

  export type UtxoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    txHash?: boolean
    index?: boolean
    address?: boolean
    plutusData?: boolean
    scriptRef?: boolean
    coin?: boolean
  }, ExtArgs["result"]["utxo"]>

  export type UtxoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    txHash?: boolean
    index?: boolean
    address?: boolean
    plutusData?: boolean
    scriptRef?: boolean
    coin?: boolean
  }, ExtArgs["result"]["utxo"]>

  export type UtxoSelectScalar = {
    id?: boolean
    txHash?: boolean
    index?: boolean
    address?: boolean
    plutusData?: boolean
    scriptRef?: boolean
    coin?: boolean
  }

  export type UtxoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "txHash" | "index" | "address" | "plutusData" | "scriptRef" | "coin", ExtArgs["result"]["utxo"]>
  export type UtxoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    MultiAsset?: boolean | Utxo$MultiAssetArgs<ExtArgs>
    NetworkTxOutput?: boolean | Utxo$NetworkTxOutputArgs<ExtArgs>
    LocalStateTxOutput?: boolean | Utxo$LocalStateTxOutputArgs<ExtArgs>
    _count?: boolean | UtxoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UtxoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UtxoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UtxoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Utxo"
    objects: {
      MultiAsset: Prisma.$MultiAssetPayload<ExtArgs>[]
      NetworkTxOutput: Prisma.$NetworkTxOutputPayload<ExtArgs>[]
      LocalStateTxOutput: Prisma.$LocalStateTxOutputPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      txHash: string
      index: number
      address: string
      plutusData: string | null
      scriptRef: string | null
      coin: bigint
    }, ExtArgs["result"]["utxo"]>
    composites: {}
  }

  type UtxoGetPayload<S extends boolean | null | undefined | UtxoDefaultArgs> = $Result.GetResult<Prisma.$UtxoPayload, S>

  type UtxoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UtxoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UtxoCountAggregateInputType | true
    }

  export interface UtxoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Utxo'], meta: { name: 'Utxo' } }
    /**
     * Find zero or one Utxo that matches the filter.
     * @param {UtxoFindUniqueArgs} args - Arguments to find a Utxo
     * @example
     * // Get one Utxo
     * const utxo = await prisma.utxo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UtxoFindUniqueArgs>(args: SelectSubset<T, UtxoFindUniqueArgs<ExtArgs>>): Prisma__UtxoClient<$Result.GetResult<Prisma.$UtxoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Utxo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UtxoFindUniqueOrThrowArgs} args - Arguments to find a Utxo
     * @example
     * // Get one Utxo
     * const utxo = await prisma.utxo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UtxoFindUniqueOrThrowArgs>(args: SelectSubset<T, UtxoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UtxoClient<$Result.GetResult<Prisma.$UtxoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Utxo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtxoFindFirstArgs} args - Arguments to find a Utxo
     * @example
     * // Get one Utxo
     * const utxo = await prisma.utxo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UtxoFindFirstArgs>(args?: SelectSubset<T, UtxoFindFirstArgs<ExtArgs>>): Prisma__UtxoClient<$Result.GetResult<Prisma.$UtxoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Utxo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtxoFindFirstOrThrowArgs} args - Arguments to find a Utxo
     * @example
     * // Get one Utxo
     * const utxo = await prisma.utxo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UtxoFindFirstOrThrowArgs>(args?: SelectSubset<T, UtxoFindFirstOrThrowArgs<ExtArgs>>): Prisma__UtxoClient<$Result.GetResult<Prisma.$UtxoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Utxos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtxoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Utxos
     * const utxos = await prisma.utxo.findMany()
     * 
     * // Get first 10 Utxos
     * const utxos = await prisma.utxo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const utxoWithIdOnly = await prisma.utxo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UtxoFindManyArgs>(args?: SelectSubset<T, UtxoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UtxoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Utxo.
     * @param {UtxoCreateArgs} args - Arguments to create a Utxo.
     * @example
     * // Create one Utxo
     * const Utxo = await prisma.utxo.create({
     *   data: {
     *     // ... data to create a Utxo
     *   }
     * })
     * 
     */
    create<T extends UtxoCreateArgs>(args: SelectSubset<T, UtxoCreateArgs<ExtArgs>>): Prisma__UtxoClient<$Result.GetResult<Prisma.$UtxoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Utxos.
     * @param {UtxoCreateManyArgs} args - Arguments to create many Utxos.
     * @example
     * // Create many Utxos
     * const utxo = await prisma.utxo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UtxoCreateManyArgs>(args?: SelectSubset<T, UtxoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Utxos and returns the data saved in the database.
     * @param {UtxoCreateManyAndReturnArgs} args - Arguments to create many Utxos.
     * @example
     * // Create many Utxos
     * const utxo = await prisma.utxo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Utxos and only return the `id`
     * const utxoWithIdOnly = await prisma.utxo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UtxoCreateManyAndReturnArgs>(args?: SelectSubset<T, UtxoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UtxoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Utxo.
     * @param {UtxoDeleteArgs} args - Arguments to delete one Utxo.
     * @example
     * // Delete one Utxo
     * const Utxo = await prisma.utxo.delete({
     *   where: {
     *     // ... filter to delete one Utxo
     *   }
     * })
     * 
     */
    delete<T extends UtxoDeleteArgs>(args: SelectSubset<T, UtxoDeleteArgs<ExtArgs>>): Prisma__UtxoClient<$Result.GetResult<Prisma.$UtxoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Utxo.
     * @param {UtxoUpdateArgs} args - Arguments to update one Utxo.
     * @example
     * // Update one Utxo
     * const utxo = await prisma.utxo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UtxoUpdateArgs>(args: SelectSubset<T, UtxoUpdateArgs<ExtArgs>>): Prisma__UtxoClient<$Result.GetResult<Prisma.$UtxoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Utxos.
     * @param {UtxoDeleteManyArgs} args - Arguments to filter Utxos to delete.
     * @example
     * // Delete a few Utxos
     * const { count } = await prisma.utxo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UtxoDeleteManyArgs>(args?: SelectSubset<T, UtxoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Utxos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtxoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Utxos
     * const utxo = await prisma.utxo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UtxoUpdateManyArgs>(args: SelectSubset<T, UtxoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Utxos and returns the data updated in the database.
     * @param {UtxoUpdateManyAndReturnArgs} args - Arguments to update many Utxos.
     * @example
     * // Update many Utxos
     * const utxo = await prisma.utxo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Utxos and only return the `id`
     * const utxoWithIdOnly = await prisma.utxo.updateManyAndReturn({
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
    updateManyAndReturn<T extends UtxoUpdateManyAndReturnArgs>(args: SelectSubset<T, UtxoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UtxoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Utxo.
     * @param {UtxoUpsertArgs} args - Arguments to update or create a Utxo.
     * @example
     * // Update or create a Utxo
     * const utxo = await prisma.utxo.upsert({
     *   create: {
     *     // ... data to create a Utxo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Utxo we want to update
     *   }
     * })
     */
    upsert<T extends UtxoUpsertArgs>(args: SelectSubset<T, UtxoUpsertArgs<ExtArgs>>): Prisma__UtxoClient<$Result.GetResult<Prisma.$UtxoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Utxos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtxoCountArgs} args - Arguments to filter Utxos to count.
     * @example
     * // Count the number of Utxos
     * const count = await prisma.utxo.count({
     *   where: {
     *     // ... the filter for the Utxos we want to count
     *   }
     * })
    **/
    count<T extends UtxoCountArgs>(
      args?: Subset<T, UtxoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UtxoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Utxo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtxoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UtxoAggregateArgs>(args: Subset<T, UtxoAggregateArgs>): Prisma.PrismaPromise<GetUtxoAggregateType<T>>

    /**
     * Group by Utxo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtxoGroupByArgs} args - Group by arguments.
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
      T extends UtxoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UtxoGroupByArgs['orderBy'] }
        : { orderBy?: UtxoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UtxoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUtxoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Utxo model
   */
  readonly fields: UtxoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Utxo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UtxoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    MultiAsset<T extends Utxo$MultiAssetArgs<ExtArgs> = {}>(args?: Subset<T, Utxo$MultiAssetArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MultiAssetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    NetworkTxOutput<T extends Utxo$NetworkTxOutputArgs<ExtArgs> = {}>(args?: Subset<T, Utxo$NetworkTxOutputArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NetworkTxOutputPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    LocalStateTxOutput<T extends Utxo$LocalStateTxOutputArgs<ExtArgs> = {}>(args?: Subset<T, Utxo$LocalStateTxOutputArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocalStateTxOutputPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Utxo model
   */
  interface UtxoFieldRefs {
    readonly id: FieldRef<"Utxo", 'Int'>
    readonly txHash: FieldRef<"Utxo", 'String'>
    readonly index: FieldRef<"Utxo", 'Int'>
    readonly address: FieldRef<"Utxo", 'String'>
    readonly plutusData: FieldRef<"Utxo", 'String'>
    readonly scriptRef: FieldRef<"Utxo", 'String'>
    readonly coin: FieldRef<"Utxo", 'BigInt'>
  }
    

  // Custom InputTypes
  /**
   * Utxo findUnique
   */
  export type UtxoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utxo
     */
    select?: UtxoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utxo
     */
    omit?: UtxoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtxoInclude<ExtArgs> | null
    /**
     * Filter, which Utxo to fetch.
     */
    where: UtxoWhereUniqueInput
  }

  /**
   * Utxo findUniqueOrThrow
   */
  export type UtxoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utxo
     */
    select?: UtxoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utxo
     */
    omit?: UtxoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtxoInclude<ExtArgs> | null
    /**
     * Filter, which Utxo to fetch.
     */
    where: UtxoWhereUniqueInput
  }

  /**
   * Utxo findFirst
   */
  export type UtxoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utxo
     */
    select?: UtxoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utxo
     */
    omit?: UtxoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtxoInclude<ExtArgs> | null
    /**
     * Filter, which Utxo to fetch.
     */
    where?: UtxoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Utxos to fetch.
     */
    orderBy?: UtxoOrderByWithRelationInput | UtxoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Utxos.
     */
    cursor?: UtxoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Utxos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Utxos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Utxos.
     */
    distinct?: UtxoScalarFieldEnum | UtxoScalarFieldEnum[]
  }

  /**
   * Utxo findFirstOrThrow
   */
  export type UtxoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utxo
     */
    select?: UtxoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utxo
     */
    omit?: UtxoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtxoInclude<ExtArgs> | null
    /**
     * Filter, which Utxo to fetch.
     */
    where?: UtxoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Utxos to fetch.
     */
    orderBy?: UtxoOrderByWithRelationInput | UtxoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Utxos.
     */
    cursor?: UtxoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Utxos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Utxos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Utxos.
     */
    distinct?: UtxoScalarFieldEnum | UtxoScalarFieldEnum[]
  }

  /**
   * Utxo findMany
   */
  export type UtxoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utxo
     */
    select?: UtxoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utxo
     */
    omit?: UtxoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtxoInclude<ExtArgs> | null
    /**
     * Filter, which Utxos to fetch.
     */
    where?: UtxoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Utxos to fetch.
     */
    orderBy?: UtxoOrderByWithRelationInput | UtxoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Utxos.
     */
    cursor?: UtxoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Utxos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Utxos.
     */
    skip?: number
    distinct?: UtxoScalarFieldEnum | UtxoScalarFieldEnum[]
  }

  /**
   * Utxo create
   */
  export type UtxoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utxo
     */
    select?: UtxoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utxo
     */
    omit?: UtxoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtxoInclude<ExtArgs> | null
    /**
     * The data needed to create a Utxo.
     */
    data: XOR<UtxoCreateInput, UtxoUncheckedCreateInput>
  }

  /**
   * Utxo createMany
   */
  export type UtxoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Utxos.
     */
    data: UtxoCreateManyInput | UtxoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Utxo createManyAndReturn
   */
  export type UtxoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utxo
     */
    select?: UtxoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Utxo
     */
    omit?: UtxoOmit<ExtArgs> | null
    /**
     * The data used to create many Utxos.
     */
    data: UtxoCreateManyInput | UtxoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Utxo update
   */
  export type UtxoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utxo
     */
    select?: UtxoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utxo
     */
    omit?: UtxoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtxoInclude<ExtArgs> | null
    /**
     * The data needed to update a Utxo.
     */
    data: XOR<UtxoUpdateInput, UtxoUncheckedUpdateInput>
    /**
     * Choose, which Utxo to update.
     */
    where: UtxoWhereUniqueInput
  }

  /**
   * Utxo updateMany
   */
  export type UtxoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Utxos.
     */
    data: XOR<UtxoUpdateManyMutationInput, UtxoUncheckedUpdateManyInput>
    /**
     * Filter which Utxos to update
     */
    where?: UtxoWhereInput
    /**
     * Limit how many Utxos to update.
     */
    limit?: number
  }

  /**
   * Utxo updateManyAndReturn
   */
  export type UtxoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utxo
     */
    select?: UtxoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Utxo
     */
    omit?: UtxoOmit<ExtArgs> | null
    /**
     * The data used to update Utxos.
     */
    data: XOR<UtxoUpdateManyMutationInput, UtxoUncheckedUpdateManyInput>
    /**
     * Filter which Utxos to update
     */
    where?: UtxoWhereInput
    /**
     * Limit how many Utxos to update.
     */
    limit?: number
  }

  /**
   * Utxo upsert
   */
  export type UtxoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utxo
     */
    select?: UtxoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utxo
     */
    omit?: UtxoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtxoInclude<ExtArgs> | null
    /**
     * The filter to search for the Utxo to update in case it exists.
     */
    where: UtxoWhereUniqueInput
    /**
     * In case the Utxo found by the `where` argument doesn't exist, create a new Utxo with this data.
     */
    create: XOR<UtxoCreateInput, UtxoUncheckedCreateInput>
    /**
     * In case the Utxo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UtxoUpdateInput, UtxoUncheckedUpdateInput>
  }

  /**
   * Utxo delete
   */
  export type UtxoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utxo
     */
    select?: UtxoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utxo
     */
    omit?: UtxoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtxoInclude<ExtArgs> | null
    /**
     * Filter which Utxo to delete.
     */
    where: UtxoWhereUniqueInput
  }

  /**
   * Utxo deleteMany
   */
  export type UtxoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Utxos to delete
     */
    where?: UtxoWhereInput
    /**
     * Limit how many Utxos to delete.
     */
    limit?: number
  }

  /**
   * Utxo.MultiAsset
   */
  export type Utxo$MultiAssetArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MultiAsset
     */
    select?: MultiAssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MultiAsset
     */
    omit?: MultiAssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MultiAssetInclude<ExtArgs> | null
    where?: MultiAssetWhereInput
    orderBy?: MultiAssetOrderByWithRelationInput | MultiAssetOrderByWithRelationInput[]
    cursor?: MultiAssetWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MultiAssetScalarFieldEnum | MultiAssetScalarFieldEnum[]
  }

  /**
   * Utxo.NetworkTxOutput
   */
  export type Utxo$NetworkTxOutputArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NetworkTxOutput
     */
    select?: NetworkTxOutputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NetworkTxOutput
     */
    omit?: NetworkTxOutputOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NetworkTxOutputInclude<ExtArgs> | null
    where?: NetworkTxOutputWhereInput
    orderBy?: NetworkTxOutputOrderByWithRelationInput | NetworkTxOutputOrderByWithRelationInput[]
    cursor?: NetworkTxOutputWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NetworkTxOutputScalarFieldEnum | NetworkTxOutputScalarFieldEnum[]
  }

  /**
   * Utxo.LocalStateTxOutput
   */
  export type Utxo$LocalStateTxOutputArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocalStateTxOutput
     */
    select?: LocalStateTxOutputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LocalStateTxOutput
     */
    omit?: LocalStateTxOutputOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocalStateTxOutputInclude<ExtArgs> | null
    where?: LocalStateTxOutputWhereInput
    orderBy?: LocalStateTxOutputOrderByWithRelationInput | LocalStateTxOutputOrderByWithRelationInput[]
    cursor?: LocalStateTxOutputWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LocalStateTxOutputScalarFieldEnum | LocalStateTxOutputScalarFieldEnum[]
  }

  /**
   * Utxo without action
   */
  export type UtxoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utxo
     */
    select?: UtxoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utxo
     */
    omit?: UtxoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtxoInclude<ExtArgs> | null
  }


  /**
   * Model MultiAsset
   */

  export type AggregateMultiAsset = {
    _count: MultiAssetCountAggregateOutputType | null
    _avg: MultiAssetAvgAggregateOutputType | null
    _sum: MultiAssetSumAggregateOutputType | null
    _min: MultiAssetMinAggregateOutputType | null
    _max: MultiAssetMaxAggregateOutputType | null
  }

  export type MultiAssetAvgAggregateOutputType = {
    id: number | null
    quantity: number | null
    utxoId: number | null
  }

  export type MultiAssetSumAggregateOutputType = {
    id: number | null
    quantity: bigint | null
    utxoId: number | null
  }

  export type MultiAssetMinAggregateOutputType = {
    id: number | null
    policyId: string | null
    assetName: string | null
    quantity: bigint | null
    utxoId: number | null
  }

  export type MultiAssetMaxAggregateOutputType = {
    id: number | null
    policyId: string | null
    assetName: string | null
    quantity: bigint | null
    utxoId: number | null
  }

  export type MultiAssetCountAggregateOutputType = {
    id: number
    policyId: number
    assetName: number
    quantity: number
    utxoId: number
    _all: number
  }


  export type MultiAssetAvgAggregateInputType = {
    id?: true
    quantity?: true
    utxoId?: true
  }

  export type MultiAssetSumAggregateInputType = {
    id?: true
    quantity?: true
    utxoId?: true
  }

  export type MultiAssetMinAggregateInputType = {
    id?: true
    policyId?: true
    assetName?: true
    quantity?: true
    utxoId?: true
  }

  export type MultiAssetMaxAggregateInputType = {
    id?: true
    policyId?: true
    assetName?: true
    quantity?: true
    utxoId?: true
  }

  export type MultiAssetCountAggregateInputType = {
    id?: true
    policyId?: true
    assetName?: true
    quantity?: true
    utxoId?: true
    _all?: true
  }

  export type MultiAssetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MultiAsset to aggregate.
     */
    where?: MultiAssetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MultiAssets to fetch.
     */
    orderBy?: MultiAssetOrderByWithRelationInput | MultiAssetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MultiAssetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MultiAssets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MultiAssets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MultiAssets
    **/
    _count?: true | MultiAssetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MultiAssetAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MultiAssetSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MultiAssetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MultiAssetMaxAggregateInputType
  }

  export type GetMultiAssetAggregateType<T extends MultiAssetAggregateArgs> = {
        [P in keyof T & keyof AggregateMultiAsset]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMultiAsset[P]>
      : GetScalarType<T[P], AggregateMultiAsset[P]>
  }




  export type MultiAssetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MultiAssetWhereInput
    orderBy?: MultiAssetOrderByWithAggregationInput | MultiAssetOrderByWithAggregationInput[]
    by: MultiAssetScalarFieldEnum[] | MultiAssetScalarFieldEnum
    having?: MultiAssetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MultiAssetCountAggregateInputType | true
    _avg?: MultiAssetAvgAggregateInputType
    _sum?: MultiAssetSumAggregateInputType
    _min?: MultiAssetMinAggregateInputType
    _max?: MultiAssetMaxAggregateInputType
  }

  export type MultiAssetGroupByOutputType = {
    id: number
    policyId: string
    assetName: string
    quantity: bigint
    utxoId: number | null
    _count: MultiAssetCountAggregateOutputType | null
    _avg: MultiAssetAvgAggregateOutputType | null
    _sum: MultiAssetSumAggregateOutputType | null
    _min: MultiAssetMinAggregateOutputType | null
    _max: MultiAssetMaxAggregateOutputType | null
  }

  type GetMultiAssetGroupByPayload<T extends MultiAssetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MultiAssetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MultiAssetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MultiAssetGroupByOutputType[P]>
            : GetScalarType<T[P], MultiAssetGroupByOutputType[P]>
        }
      >
    >


  export type MultiAssetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    policyId?: boolean
    assetName?: boolean
    quantity?: boolean
    utxoId?: boolean
    Utxo?: boolean | MultiAsset$UtxoArgs<ExtArgs>
  }, ExtArgs["result"]["multiAsset"]>

  export type MultiAssetSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    policyId?: boolean
    assetName?: boolean
    quantity?: boolean
    utxoId?: boolean
    Utxo?: boolean | MultiAsset$UtxoArgs<ExtArgs>
  }, ExtArgs["result"]["multiAsset"]>

  export type MultiAssetSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    policyId?: boolean
    assetName?: boolean
    quantity?: boolean
    utxoId?: boolean
    Utxo?: boolean | MultiAsset$UtxoArgs<ExtArgs>
  }, ExtArgs["result"]["multiAsset"]>

  export type MultiAssetSelectScalar = {
    id?: boolean
    policyId?: boolean
    assetName?: boolean
    quantity?: boolean
    utxoId?: boolean
  }

  export type MultiAssetOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "policyId" | "assetName" | "quantity" | "utxoId", ExtArgs["result"]["multiAsset"]>
  export type MultiAssetInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Utxo?: boolean | MultiAsset$UtxoArgs<ExtArgs>
  }
  export type MultiAssetIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Utxo?: boolean | MultiAsset$UtxoArgs<ExtArgs>
  }
  export type MultiAssetIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Utxo?: boolean | MultiAsset$UtxoArgs<ExtArgs>
  }

  export type $MultiAssetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MultiAsset"
    objects: {
      Utxo: Prisma.$UtxoPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      policyId: string
      assetName: string
      quantity: bigint
      utxoId: number | null
    }, ExtArgs["result"]["multiAsset"]>
    composites: {}
  }

  type MultiAssetGetPayload<S extends boolean | null | undefined | MultiAssetDefaultArgs> = $Result.GetResult<Prisma.$MultiAssetPayload, S>

  type MultiAssetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MultiAssetFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MultiAssetCountAggregateInputType | true
    }

  export interface MultiAssetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MultiAsset'], meta: { name: 'MultiAsset' } }
    /**
     * Find zero or one MultiAsset that matches the filter.
     * @param {MultiAssetFindUniqueArgs} args - Arguments to find a MultiAsset
     * @example
     * // Get one MultiAsset
     * const multiAsset = await prisma.multiAsset.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MultiAssetFindUniqueArgs>(args: SelectSubset<T, MultiAssetFindUniqueArgs<ExtArgs>>): Prisma__MultiAssetClient<$Result.GetResult<Prisma.$MultiAssetPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MultiAsset that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MultiAssetFindUniqueOrThrowArgs} args - Arguments to find a MultiAsset
     * @example
     * // Get one MultiAsset
     * const multiAsset = await prisma.multiAsset.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MultiAssetFindUniqueOrThrowArgs>(args: SelectSubset<T, MultiAssetFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MultiAssetClient<$Result.GetResult<Prisma.$MultiAssetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MultiAsset that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MultiAssetFindFirstArgs} args - Arguments to find a MultiAsset
     * @example
     * // Get one MultiAsset
     * const multiAsset = await prisma.multiAsset.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MultiAssetFindFirstArgs>(args?: SelectSubset<T, MultiAssetFindFirstArgs<ExtArgs>>): Prisma__MultiAssetClient<$Result.GetResult<Prisma.$MultiAssetPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MultiAsset that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MultiAssetFindFirstOrThrowArgs} args - Arguments to find a MultiAsset
     * @example
     * // Get one MultiAsset
     * const multiAsset = await prisma.multiAsset.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MultiAssetFindFirstOrThrowArgs>(args?: SelectSubset<T, MultiAssetFindFirstOrThrowArgs<ExtArgs>>): Prisma__MultiAssetClient<$Result.GetResult<Prisma.$MultiAssetPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MultiAssets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MultiAssetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MultiAssets
     * const multiAssets = await prisma.multiAsset.findMany()
     * 
     * // Get first 10 MultiAssets
     * const multiAssets = await prisma.multiAsset.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const multiAssetWithIdOnly = await prisma.multiAsset.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MultiAssetFindManyArgs>(args?: SelectSubset<T, MultiAssetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MultiAssetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MultiAsset.
     * @param {MultiAssetCreateArgs} args - Arguments to create a MultiAsset.
     * @example
     * // Create one MultiAsset
     * const MultiAsset = await prisma.multiAsset.create({
     *   data: {
     *     // ... data to create a MultiAsset
     *   }
     * })
     * 
     */
    create<T extends MultiAssetCreateArgs>(args: SelectSubset<T, MultiAssetCreateArgs<ExtArgs>>): Prisma__MultiAssetClient<$Result.GetResult<Prisma.$MultiAssetPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MultiAssets.
     * @param {MultiAssetCreateManyArgs} args - Arguments to create many MultiAssets.
     * @example
     * // Create many MultiAssets
     * const multiAsset = await prisma.multiAsset.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MultiAssetCreateManyArgs>(args?: SelectSubset<T, MultiAssetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MultiAssets and returns the data saved in the database.
     * @param {MultiAssetCreateManyAndReturnArgs} args - Arguments to create many MultiAssets.
     * @example
     * // Create many MultiAssets
     * const multiAsset = await prisma.multiAsset.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MultiAssets and only return the `id`
     * const multiAssetWithIdOnly = await prisma.multiAsset.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MultiAssetCreateManyAndReturnArgs>(args?: SelectSubset<T, MultiAssetCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MultiAssetPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MultiAsset.
     * @param {MultiAssetDeleteArgs} args - Arguments to delete one MultiAsset.
     * @example
     * // Delete one MultiAsset
     * const MultiAsset = await prisma.multiAsset.delete({
     *   where: {
     *     // ... filter to delete one MultiAsset
     *   }
     * })
     * 
     */
    delete<T extends MultiAssetDeleteArgs>(args: SelectSubset<T, MultiAssetDeleteArgs<ExtArgs>>): Prisma__MultiAssetClient<$Result.GetResult<Prisma.$MultiAssetPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MultiAsset.
     * @param {MultiAssetUpdateArgs} args - Arguments to update one MultiAsset.
     * @example
     * // Update one MultiAsset
     * const multiAsset = await prisma.multiAsset.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MultiAssetUpdateArgs>(args: SelectSubset<T, MultiAssetUpdateArgs<ExtArgs>>): Prisma__MultiAssetClient<$Result.GetResult<Prisma.$MultiAssetPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MultiAssets.
     * @param {MultiAssetDeleteManyArgs} args - Arguments to filter MultiAssets to delete.
     * @example
     * // Delete a few MultiAssets
     * const { count } = await prisma.multiAsset.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MultiAssetDeleteManyArgs>(args?: SelectSubset<T, MultiAssetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MultiAssets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MultiAssetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MultiAssets
     * const multiAsset = await prisma.multiAsset.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MultiAssetUpdateManyArgs>(args: SelectSubset<T, MultiAssetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MultiAssets and returns the data updated in the database.
     * @param {MultiAssetUpdateManyAndReturnArgs} args - Arguments to update many MultiAssets.
     * @example
     * // Update many MultiAssets
     * const multiAsset = await prisma.multiAsset.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MultiAssets and only return the `id`
     * const multiAssetWithIdOnly = await prisma.multiAsset.updateManyAndReturn({
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
    updateManyAndReturn<T extends MultiAssetUpdateManyAndReturnArgs>(args: SelectSubset<T, MultiAssetUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MultiAssetPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MultiAsset.
     * @param {MultiAssetUpsertArgs} args - Arguments to update or create a MultiAsset.
     * @example
     * // Update or create a MultiAsset
     * const multiAsset = await prisma.multiAsset.upsert({
     *   create: {
     *     // ... data to create a MultiAsset
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MultiAsset we want to update
     *   }
     * })
     */
    upsert<T extends MultiAssetUpsertArgs>(args: SelectSubset<T, MultiAssetUpsertArgs<ExtArgs>>): Prisma__MultiAssetClient<$Result.GetResult<Prisma.$MultiAssetPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MultiAssets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MultiAssetCountArgs} args - Arguments to filter MultiAssets to count.
     * @example
     * // Count the number of MultiAssets
     * const count = await prisma.multiAsset.count({
     *   where: {
     *     // ... the filter for the MultiAssets we want to count
     *   }
     * })
    **/
    count<T extends MultiAssetCountArgs>(
      args?: Subset<T, MultiAssetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MultiAssetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MultiAsset.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MultiAssetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MultiAssetAggregateArgs>(args: Subset<T, MultiAssetAggregateArgs>): Prisma.PrismaPromise<GetMultiAssetAggregateType<T>>

    /**
     * Group by MultiAsset.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MultiAssetGroupByArgs} args - Group by arguments.
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
      T extends MultiAssetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MultiAssetGroupByArgs['orderBy'] }
        : { orderBy?: MultiAssetGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MultiAssetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMultiAssetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MultiAsset model
   */
  readonly fields: MultiAssetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MultiAsset.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MultiAssetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Utxo<T extends MultiAsset$UtxoArgs<ExtArgs> = {}>(args?: Subset<T, MultiAsset$UtxoArgs<ExtArgs>>): Prisma__UtxoClient<$Result.GetResult<Prisma.$UtxoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the MultiAsset model
   */
  interface MultiAssetFieldRefs {
    readonly id: FieldRef<"MultiAsset", 'Int'>
    readonly policyId: FieldRef<"MultiAsset", 'String'>
    readonly assetName: FieldRef<"MultiAsset", 'String'>
    readonly quantity: FieldRef<"MultiAsset", 'BigInt'>
    readonly utxoId: FieldRef<"MultiAsset", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * MultiAsset findUnique
   */
  export type MultiAssetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MultiAsset
     */
    select?: MultiAssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MultiAsset
     */
    omit?: MultiAssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MultiAssetInclude<ExtArgs> | null
    /**
     * Filter, which MultiAsset to fetch.
     */
    where: MultiAssetWhereUniqueInput
  }

  /**
   * MultiAsset findUniqueOrThrow
   */
  export type MultiAssetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MultiAsset
     */
    select?: MultiAssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MultiAsset
     */
    omit?: MultiAssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MultiAssetInclude<ExtArgs> | null
    /**
     * Filter, which MultiAsset to fetch.
     */
    where: MultiAssetWhereUniqueInput
  }

  /**
   * MultiAsset findFirst
   */
  export type MultiAssetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MultiAsset
     */
    select?: MultiAssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MultiAsset
     */
    omit?: MultiAssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MultiAssetInclude<ExtArgs> | null
    /**
     * Filter, which MultiAsset to fetch.
     */
    where?: MultiAssetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MultiAssets to fetch.
     */
    orderBy?: MultiAssetOrderByWithRelationInput | MultiAssetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MultiAssets.
     */
    cursor?: MultiAssetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MultiAssets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MultiAssets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MultiAssets.
     */
    distinct?: MultiAssetScalarFieldEnum | MultiAssetScalarFieldEnum[]
  }

  /**
   * MultiAsset findFirstOrThrow
   */
  export type MultiAssetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MultiAsset
     */
    select?: MultiAssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MultiAsset
     */
    omit?: MultiAssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MultiAssetInclude<ExtArgs> | null
    /**
     * Filter, which MultiAsset to fetch.
     */
    where?: MultiAssetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MultiAssets to fetch.
     */
    orderBy?: MultiAssetOrderByWithRelationInput | MultiAssetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MultiAssets.
     */
    cursor?: MultiAssetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MultiAssets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MultiAssets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MultiAssets.
     */
    distinct?: MultiAssetScalarFieldEnum | MultiAssetScalarFieldEnum[]
  }

  /**
   * MultiAsset findMany
   */
  export type MultiAssetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MultiAsset
     */
    select?: MultiAssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MultiAsset
     */
    omit?: MultiAssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MultiAssetInclude<ExtArgs> | null
    /**
     * Filter, which MultiAssets to fetch.
     */
    where?: MultiAssetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MultiAssets to fetch.
     */
    orderBy?: MultiAssetOrderByWithRelationInput | MultiAssetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MultiAssets.
     */
    cursor?: MultiAssetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MultiAssets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MultiAssets.
     */
    skip?: number
    distinct?: MultiAssetScalarFieldEnum | MultiAssetScalarFieldEnum[]
  }

  /**
   * MultiAsset create
   */
  export type MultiAssetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MultiAsset
     */
    select?: MultiAssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MultiAsset
     */
    omit?: MultiAssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MultiAssetInclude<ExtArgs> | null
    /**
     * The data needed to create a MultiAsset.
     */
    data: XOR<MultiAssetCreateInput, MultiAssetUncheckedCreateInput>
  }

  /**
   * MultiAsset createMany
   */
  export type MultiAssetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MultiAssets.
     */
    data: MultiAssetCreateManyInput | MultiAssetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MultiAsset createManyAndReturn
   */
  export type MultiAssetCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MultiAsset
     */
    select?: MultiAssetSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MultiAsset
     */
    omit?: MultiAssetOmit<ExtArgs> | null
    /**
     * The data used to create many MultiAssets.
     */
    data: MultiAssetCreateManyInput | MultiAssetCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MultiAssetIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MultiAsset update
   */
  export type MultiAssetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MultiAsset
     */
    select?: MultiAssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MultiAsset
     */
    omit?: MultiAssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MultiAssetInclude<ExtArgs> | null
    /**
     * The data needed to update a MultiAsset.
     */
    data: XOR<MultiAssetUpdateInput, MultiAssetUncheckedUpdateInput>
    /**
     * Choose, which MultiAsset to update.
     */
    where: MultiAssetWhereUniqueInput
  }

  /**
   * MultiAsset updateMany
   */
  export type MultiAssetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MultiAssets.
     */
    data: XOR<MultiAssetUpdateManyMutationInput, MultiAssetUncheckedUpdateManyInput>
    /**
     * Filter which MultiAssets to update
     */
    where?: MultiAssetWhereInput
    /**
     * Limit how many MultiAssets to update.
     */
    limit?: number
  }

  /**
   * MultiAsset updateManyAndReturn
   */
  export type MultiAssetUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MultiAsset
     */
    select?: MultiAssetSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MultiAsset
     */
    omit?: MultiAssetOmit<ExtArgs> | null
    /**
     * The data used to update MultiAssets.
     */
    data: XOR<MultiAssetUpdateManyMutationInput, MultiAssetUncheckedUpdateManyInput>
    /**
     * Filter which MultiAssets to update
     */
    where?: MultiAssetWhereInput
    /**
     * Limit how many MultiAssets to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MultiAssetIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MultiAsset upsert
   */
  export type MultiAssetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MultiAsset
     */
    select?: MultiAssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MultiAsset
     */
    omit?: MultiAssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MultiAssetInclude<ExtArgs> | null
    /**
     * The filter to search for the MultiAsset to update in case it exists.
     */
    where: MultiAssetWhereUniqueInput
    /**
     * In case the MultiAsset found by the `where` argument doesn't exist, create a new MultiAsset with this data.
     */
    create: XOR<MultiAssetCreateInput, MultiAssetUncheckedCreateInput>
    /**
     * In case the MultiAsset was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MultiAssetUpdateInput, MultiAssetUncheckedUpdateInput>
  }

  /**
   * MultiAsset delete
   */
  export type MultiAssetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MultiAsset
     */
    select?: MultiAssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MultiAsset
     */
    omit?: MultiAssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MultiAssetInclude<ExtArgs> | null
    /**
     * Filter which MultiAsset to delete.
     */
    where: MultiAssetWhereUniqueInput
  }

  /**
   * MultiAsset deleteMany
   */
  export type MultiAssetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MultiAssets to delete
     */
    where?: MultiAssetWhereInput
    /**
     * Limit how many MultiAssets to delete.
     */
    limit?: number
  }

  /**
   * MultiAsset.Utxo
   */
  export type MultiAsset$UtxoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utxo
     */
    select?: UtxoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utxo
     */
    omit?: UtxoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtxoInclude<ExtArgs> | null
    where?: UtxoWhereInput
  }

  /**
   * MultiAsset without action
   */
  export type MultiAssetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MultiAsset
     */
    select?: MultiAssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MultiAsset
     */
    omit?: MultiAssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MultiAssetInclude<ExtArgs> | null
  }


  /**
   * Model InstancePolicy
   */

  export type AggregateInstancePolicy = {
    _count: InstancePolicyCountAggregateOutputType | null
    _avg: InstancePolicyAvgAggregateOutputType | null
    _sum: InstancePolicySumAggregateOutputType | null
    _min: InstancePolicyMinAggregateOutputType | null
    _max: InstancePolicyMaxAggregateOutputType | null
  }

  export type InstancePolicyAvgAggregateOutputType = {
    id: number | null
  }

  export type InstancePolicySumAggregateOutputType = {
    id: number | null
  }

  export type InstancePolicyMinAggregateOutputType = {
    id: number | null
    policyId: string | null
    createdAt: Date | null
  }

  export type InstancePolicyMaxAggregateOutputType = {
    id: number | null
    policyId: string | null
    createdAt: Date | null
  }

  export type InstancePolicyCountAggregateOutputType = {
    id: number
    policyId: number
    createdAt: number
    _all: number
  }


  export type InstancePolicyAvgAggregateInputType = {
    id?: true
  }

  export type InstancePolicySumAggregateInputType = {
    id?: true
  }

  export type InstancePolicyMinAggregateInputType = {
    id?: true
    policyId?: true
    createdAt?: true
  }

  export type InstancePolicyMaxAggregateInputType = {
    id?: true
    policyId?: true
    createdAt?: true
  }

  export type InstancePolicyCountAggregateInputType = {
    id?: true
    policyId?: true
    createdAt?: true
    _all?: true
  }

  export type InstancePolicyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InstancePolicy to aggregate.
     */
    where?: InstancePolicyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InstancePolicies to fetch.
     */
    orderBy?: InstancePolicyOrderByWithRelationInput | InstancePolicyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InstancePolicyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InstancePolicies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InstancePolicies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned InstancePolicies
    **/
    _count?: true | InstancePolicyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InstancePolicyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InstancePolicySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InstancePolicyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InstancePolicyMaxAggregateInputType
  }

  export type GetInstancePolicyAggregateType<T extends InstancePolicyAggregateArgs> = {
        [P in keyof T & keyof AggregateInstancePolicy]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInstancePolicy[P]>
      : GetScalarType<T[P], AggregateInstancePolicy[P]>
  }




  export type InstancePolicyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InstancePolicyWhereInput
    orderBy?: InstancePolicyOrderByWithAggregationInput | InstancePolicyOrderByWithAggregationInput[]
    by: InstancePolicyScalarFieldEnum[] | InstancePolicyScalarFieldEnum
    having?: InstancePolicyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InstancePolicyCountAggregateInputType | true
    _avg?: InstancePolicyAvgAggregateInputType
    _sum?: InstancePolicySumAggregateInputType
    _min?: InstancePolicyMinAggregateInputType
    _max?: InstancePolicyMaxAggregateInputType
  }

  export type InstancePolicyGroupByOutputType = {
    id: number
    policyId: string
    createdAt: Date
    _count: InstancePolicyCountAggregateOutputType | null
    _avg: InstancePolicyAvgAggregateOutputType | null
    _sum: InstancePolicySumAggregateOutputType | null
    _min: InstancePolicyMinAggregateOutputType | null
    _max: InstancePolicyMaxAggregateOutputType | null
  }

  type GetInstancePolicyGroupByPayload<T extends InstancePolicyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InstancePolicyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InstancePolicyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InstancePolicyGroupByOutputType[P]>
            : GetScalarType<T[P], InstancePolicyGroupByOutputType[P]>
        }
      >
    >


  export type InstancePolicySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    policyId?: boolean
    createdAt?: boolean
    Instance?: boolean | InstancePolicy$InstanceArgs<ExtArgs>
    _count?: boolean | InstancePolicyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["instancePolicy"]>

  export type InstancePolicySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    policyId?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["instancePolicy"]>

  export type InstancePolicySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    policyId?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["instancePolicy"]>

  export type InstancePolicySelectScalar = {
    id?: boolean
    policyId?: boolean
    createdAt?: boolean
  }

  export type InstancePolicyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "policyId" | "createdAt", ExtArgs["result"]["instancePolicy"]>
  export type InstancePolicyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Instance?: boolean | InstancePolicy$InstanceArgs<ExtArgs>
    _count?: boolean | InstancePolicyCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type InstancePolicyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type InstancePolicyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $InstancePolicyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "InstancePolicy"
    objects: {
      Instance: Prisma.$InstancePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      policyId: string
      createdAt: Date
    }, ExtArgs["result"]["instancePolicy"]>
    composites: {}
  }

  type InstancePolicyGetPayload<S extends boolean | null | undefined | InstancePolicyDefaultArgs> = $Result.GetResult<Prisma.$InstancePolicyPayload, S>

  type InstancePolicyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InstancePolicyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InstancePolicyCountAggregateInputType | true
    }

  export interface InstancePolicyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['InstancePolicy'], meta: { name: 'InstancePolicy' } }
    /**
     * Find zero or one InstancePolicy that matches the filter.
     * @param {InstancePolicyFindUniqueArgs} args - Arguments to find a InstancePolicy
     * @example
     * // Get one InstancePolicy
     * const instancePolicy = await prisma.instancePolicy.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InstancePolicyFindUniqueArgs>(args: SelectSubset<T, InstancePolicyFindUniqueArgs<ExtArgs>>): Prisma__InstancePolicyClient<$Result.GetResult<Prisma.$InstancePolicyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one InstancePolicy that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InstancePolicyFindUniqueOrThrowArgs} args - Arguments to find a InstancePolicy
     * @example
     * // Get one InstancePolicy
     * const instancePolicy = await prisma.instancePolicy.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InstancePolicyFindUniqueOrThrowArgs>(args: SelectSubset<T, InstancePolicyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InstancePolicyClient<$Result.GetResult<Prisma.$InstancePolicyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InstancePolicy that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstancePolicyFindFirstArgs} args - Arguments to find a InstancePolicy
     * @example
     * // Get one InstancePolicy
     * const instancePolicy = await prisma.instancePolicy.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InstancePolicyFindFirstArgs>(args?: SelectSubset<T, InstancePolicyFindFirstArgs<ExtArgs>>): Prisma__InstancePolicyClient<$Result.GetResult<Prisma.$InstancePolicyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InstancePolicy that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstancePolicyFindFirstOrThrowArgs} args - Arguments to find a InstancePolicy
     * @example
     * // Get one InstancePolicy
     * const instancePolicy = await prisma.instancePolicy.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InstancePolicyFindFirstOrThrowArgs>(args?: SelectSubset<T, InstancePolicyFindFirstOrThrowArgs<ExtArgs>>): Prisma__InstancePolicyClient<$Result.GetResult<Prisma.$InstancePolicyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more InstancePolicies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstancePolicyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all InstancePolicies
     * const instancePolicies = await prisma.instancePolicy.findMany()
     * 
     * // Get first 10 InstancePolicies
     * const instancePolicies = await prisma.instancePolicy.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const instancePolicyWithIdOnly = await prisma.instancePolicy.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InstancePolicyFindManyArgs>(args?: SelectSubset<T, InstancePolicyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstancePolicyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a InstancePolicy.
     * @param {InstancePolicyCreateArgs} args - Arguments to create a InstancePolicy.
     * @example
     * // Create one InstancePolicy
     * const InstancePolicy = await prisma.instancePolicy.create({
     *   data: {
     *     // ... data to create a InstancePolicy
     *   }
     * })
     * 
     */
    create<T extends InstancePolicyCreateArgs>(args: SelectSubset<T, InstancePolicyCreateArgs<ExtArgs>>): Prisma__InstancePolicyClient<$Result.GetResult<Prisma.$InstancePolicyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many InstancePolicies.
     * @param {InstancePolicyCreateManyArgs} args - Arguments to create many InstancePolicies.
     * @example
     * // Create many InstancePolicies
     * const instancePolicy = await prisma.instancePolicy.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InstancePolicyCreateManyArgs>(args?: SelectSubset<T, InstancePolicyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many InstancePolicies and returns the data saved in the database.
     * @param {InstancePolicyCreateManyAndReturnArgs} args - Arguments to create many InstancePolicies.
     * @example
     * // Create many InstancePolicies
     * const instancePolicy = await prisma.instancePolicy.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many InstancePolicies and only return the `id`
     * const instancePolicyWithIdOnly = await prisma.instancePolicy.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InstancePolicyCreateManyAndReturnArgs>(args?: SelectSubset<T, InstancePolicyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstancePolicyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a InstancePolicy.
     * @param {InstancePolicyDeleteArgs} args - Arguments to delete one InstancePolicy.
     * @example
     * // Delete one InstancePolicy
     * const InstancePolicy = await prisma.instancePolicy.delete({
     *   where: {
     *     // ... filter to delete one InstancePolicy
     *   }
     * })
     * 
     */
    delete<T extends InstancePolicyDeleteArgs>(args: SelectSubset<T, InstancePolicyDeleteArgs<ExtArgs>>): Prisma__InstancePolicyClient<$Result.GetResult<Prisma.$InstancePolicyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one InstancePolicy.
     * @param {InstancePolicyUpdateArgs} args - Arguments to update one InstancePolicy.
     * @example
     * // Update one InstancePolicy
     * const instancePolicy = await prisma.instancePolicy.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InstancePolicyUpdateArgs>(args: SelectSubset<T, InstancePolicyUpdateArgs<ExtArgs>>): Prisma__InstancePolicyClient<$Result.GetResult<Prisma.$InstancePolicyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more InstancePolicies.
     * @param {InstancePolicyDeleteManyArgs} args - Arguments to filter InstancePolicies to delete.
     * @example
     * // Delete a few InstancePolicies
     * const { count } = await prisma.instancePolicy.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InstancePolicyDeleteManyArgs>(args?: SelectSubset<T, InstancePolicyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InstancePolicies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstancePolicyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many InstancePolicies
     * const instancePolicy = await prisma.instancePolicy.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InstancePolicyUpdateManyArgs>(args: SelectSubset<T, InstancePolicyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InstancePolicies and returns the data updated in the database.
     * @param {InstancePolicyUpdateManyAndReturnArgs} args - Arguments to update many InstancePolicies.
     * @example
     * // Update many InstancePolicies
     * const instancePolicy = await prisma.instancePolicy.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more InstancePolicies and only return the `id`
     * const instancePolicyWithIdOnly = await prisma.instancePolicy.updateManyAndReturn({
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
    updateManyAndReturn<T extends InstancePolicyUpdateManyAndReturnArgs>(args: SelectSubset<T, InstancePolicyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstancePolicyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one InstancePolicy.
     * @param {InstancePolicyUpsertArgs} args - Arguments to update or create a InstancePolicy.
     * @example
     * // Update or create a InstancePolicy
     * const instancePolicy = await prisma.instancePolicy.upsert({
     *   create: {
     *     // ... data to create a InstancePolicy
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the InstancePolicy we want to update
     *   }
     * })
     */
    upsert<T extends InstancePolicyUpsertArgs>(args: SelectSubset<T, InstancePolicyUpsertArgs<ExtArgs>>): Prisma__InstancePolicyClient<$Result.GetResult<Prisma.$InstancePolicyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of InstancePolicies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstancePolicyCountArgs} args - Arguments to filter InstancePolicies to count.
     * @example
     * // Count the number of InstancePolicies
     * const count = await prisma.instancePolicy.count({
     *   where: {
     *     // ... the filter for the InstancePolicies we want to count
     *   }
     * })
    **/
    count<T extends InstancePolicyCountArgs>(
      args?: Subset<T, InstancePolicyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InstancePolicyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a InstancePolicy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstancePolicyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InstancePolicyAggregateArgs>(args: Subset<T, InstancePolicyAggregateArgs>): Prisma.PrismaPromise<GetInstancePolicyAggregateType<T>>

    /**
     * Group by InstancePolicy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstancePolicyGroupByArgs} args - Group by arguments.
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
      T extends InstancePolicyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InstancePolicyGroupByArgs['orderBy'] }
        : { orderBy?: InstancePolicyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, InstancePolicyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInstancePolicyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the InstancePolicy model
   */
  readonly fields: InstancePolicyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for InstancePolicy.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InstancePolicyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Instance<T extends InstancePolicy$InstanceArgs<ExtArgs> = {}>(args?: Subset<T, InstancePolicy$InstanceArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the InstancePolicy model
   */
  interface InstancePolicyFieldRefs {
    readonly id: FieldRef<"InstancePolicy", 'Int'>
    readonly policyId: FieldRef<"InstancePolicy", 'String'>
    readonly createdAt: FieldRef<"InstancePolicy", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * InstancePolicy findUnique
   */
  export type InstancePolicyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstancePolicy
     */
    select?: InstancePolicySelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstancePolicy
     */
    omit?: InstancePolicyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstancePolicyInclude<ExtArgs> | null
    /**
     * Filter, which InstancePolicy to fetch.
     */
    where: InstancePolicyWhereUniqueInput
  }

  /**
   * InstancePolicy findUniqueOrThrow
   */
  export type InstancePolicyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstancePolicy
     */
    select?: InstancePolicySelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstancePolicy
     */
    omit?: InstancePolicyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstancePolicyInclude<ExtArgs> | null
    /**
     * Filter, which InstancePolicy to fetch.
     */
    where: InstancePolicyWhereUniqueInput
  }

  /**
   * InstancePolicy findFirst
   */
  export type InstancePolicyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstancePolicy
     */
    select?: InstancePolicySelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstancePolicy
     */
    omit?: InstancePolicyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstancePolicyInclude<ExtArgs> | null
    /**
     * Filter, which InstancePolicy to fetch.
     */
    where?: InstancePolicyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InstancePolicies to fetch.
     */
    orderBy?: InstancePolicyOrderByWithRelationInput | InstancePolicyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InstancePolicies.
     */
    cursor?: InstancePolicyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InstancePolicies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InstancePolicies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InstancePolicies.
     */
    distinct?: InstancePolicyScalarFieldEnum | InstancePolicyScalarFieldEnum[]
  }

  /**
   * InstancePolicy findFirstOrThrow
   */
  export type InstancePolicyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstancePolicy
     */
    select?: InstancePolicySelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstancePolicy
     */
    omit?: InstancePolicyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstancePolicyInclude<ExtArgs> | null
    /**
     * Filter, which InstancePolicy to fetch.
     */
    where?: InstancePolicyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InstancePolicies to fetch.
     */
    orderBy?: InstancePolicyOrderByWithRelationInput | InstancePolicyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InstancePolicies.
     */
    cursor?: InstancePolicyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InstancePolicies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InstancePolicies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InstancePolicies.
     */
    distinct?: InstancePolicyScalarFieldEnum | InstancePolicyScalarFieldEnum[]
  }

  /**
   * InstancePolicy findMany
   */
  export type InstancePolicyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstancePolicy
     */
    select?: InstancePolicySelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstancePolicy
     */
    omit?: InstancePolicyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstancePolicyInclude<ExtArgs> | null
    /**
     * Filter, which InstancePolicies to fetch.
     */
    where?: InstancePolicyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InstancePolicies to fetch.
     */
    orderBy?: InstancePolicyOrderByWithRelationInput | InstancePolicyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing InstancePolicies.
     */
    cursor?: InstancePolicyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InstancePolicies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InstancePolicies.
     */
    skip?: number
    distinct?: InstancePolicyScalarFieldEnum | InstancePolicyScalarFieldEnum[]
  }

  /**
   * InstancePolicy create
   */
  export type InstancePolicyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstancePolicy
     */
    select?: InstancePolicySelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstancePolicy
     */
    omit?: InstancePolicyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstancePolicyInclude<ExtArgs> | null
    /**
     * The data needed to create a InstancePolicy.
     */
    data: XOR<InstancePolicyCreateInput, InstancePolicyUncheckedCreateInput>
  }

  /**
   * InstancePolicy createMany
   */
  export type InstancePolicyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many InstancePolicies.
     */
    data: InstancePolicyCreateManyInput | InstancePolicyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * InstancePolicy createManyAndReturn
   */
  export type InstancePolicyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstancePolicy
     */
    select?: InstancePolicySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InstancePolicy
     */
    omit?: InstancePolicyOmit<ExtArgs> | null
    /**
     * The data used to create many InstancePolicies.
     */
    data: InstancePolicyCreateManyInput | InstancePolicyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * InstancePolicy update
   */
  export type InstancePolicyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstancePolicy
     */
    select?: InstancePolicySelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstancePolicy
     */
    omit?: InstancePolicyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstancePolicyInclude<ExtArgs> | null
    /**
     * The data needed to update a InstancePolicy.
     */
    data: XOR<InstancePolicyUpdateInput, InstancePolicyUncheckedUpdateInput>
    /**
     * Choose, which InstancePolicy to update.
     */
    where: InstancePolicyWhereUniqueInput
  }

  /**
   * InstancePolicy updateMany
   */
  export type InstancePolicyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update InstancePolicies.
     */
    data: XOR<InstancePolicyUpdateManyMutationInput, InstancePolicyUncheckedUpdateManyInput>
    /**
     * Filter which InstancePolicies to update
     */
    where?: InstancePolicyWhereInput
    /**
     * Limit how many InstancePolicies to update.
     */
    limit?: number
  }

  /**
   * InstancePolicy updateManyAndReturn
   */
  export type InstancePolicyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstancePolicy
     */
    select?: InstancePolicySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InstancePolicy
     */
    omit?: InstancePolicyOmit<ExtArgs> | null
    /**
     * The data used to update InstancePolicies.
     */
    data: XOR<InstancePolicyUpdateManyMutationInput, InstancePolicyUncheckedUpdateManyInput>
    /**
     * Filter which InstancePolicies to update
     */
    where?: InstancePolicyWhereInput
    /**
     * Limit how many InstancePolicies to update.
     */
    limit?: number
  }

  /**
   * InstancePolicy upsert
   */
  export type InstancePolicyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstancePolicy
     */
    select?: InstancePolicySelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstancePolicy
     */
    omit?: InstancePolicyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstancePolicyInclude<ExtArgs> | null
    /**
     * The filter to search for the InstancePolicy to update in case it exists.
     */
    where: InstancePolicyWhereUniqueInput
    /**
     * In case the InstancePolicy found by the `where` argument doesn't exist, create a new InstancePolicy with this data.
     */
    create: XOR<InstancePolicyCreateInput, InstancePolicyUncheckedCreateInput>
    /**
     * In case the InstancePolicy was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InstancePolicyUpdateInput, InstancePolicyUncheckedUpdateInput>
  }

  /**
   * InstancePolicy delete
   */
  export type InstancePolicyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstancePolicy
     */
    select?: InstancePolicySelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstancePolicy
     */
    omit?: InstancePolicyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstancePolicyInclude<ExtArgs> | null
    /**
     * Filter which InstancePolicy to delete.
     */
    where: InstancePolicyWhereUniqueInput
  }

  /**
   * InstancePolicy deleteMany
   */
  export type InstancePolicyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InstancePolicies to delete
     */
    where?: InstancePolicyWhereInput
    /**
     * Limit how many InstancePolicies to delete.
     */
    limit?: number
  }

  /**
   * InstancePolicy.Instance
   */
  export type InstancePolicy$InstanceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instance
     */
    select?: InstanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instance
     */
    omit?: InstanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstanceInclude<ExtArgs> | null
    where?: InstanceWhereInput
    orderBy?: InstanceOrderByWithRelationInput | InstanceOrderByWithRelationInput[]
    cursor?: InstanceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InstanceScalarFieldEnum | InstanceScalarFieldEnum[]
  }

  /**
   * InstancePolicy without action
   */
  export type InstancePolicyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstancePolicy
     */
    select?: InstancePolicySelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstancePolicy
     */
    omit?: InstancePolicyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstancePolicyInclude<ExtArgs> | null
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


  export const NetworkTxCborScalarFieldEnum: {
    id: 'id',
    txHash: 'txHash',
    cbor: 'cbor',
    validator: 'validator',
    createdAt: 'createdAt'
  };

  export type NetworkTxCborScalarFieldEnum = (typeof NetworkTxCborScalarFieldEnum)[keyof typeof NetworkTxCborScalarFieldEnum]


  export const NetworkTxOutputScalarFieldEnum: {
    id: 'id',
    utxoId: 'utxoId',
    validator: 'validator',
    createdAt: 'createdAt'
  };

  export type NetworkTxOutputScalarFieldEnum = (typeof NetworkTxOutputScalarFieldEnum)[keyof typeof NetworkTxOutputScalarFieldEnum]


  export const InstanceScalarFieldEnum: {
    id: 'id',
    type: 'type',
    hash: 'hash',
    address: 'address',
    instancePolicyId: 'instancePolicyId',
    createdAt: 'createdAt'
  };

  export type InstanceScalarFieldEnum = (typeof InstanceScalarFieldEnum)[keyof typeof InstanceScalarFieldEnum]


  export const ProjectDetailsScalarFieldEnum: {
    id: 'id',
    projectNftPolicy: 'projectNftPolicy',
    TreasuryTokenPolicy: 'TreasuryTokenPolicy',
    TreasuryAddress: 'TreasuryAddress',
    ContributorStateAddress: 'ContributorStateAddress',
    EscrowAddress: 'EscrowAddress',
    createdAt: 'createdAt'
  };

  export type ProjectDetailsScalarFieldEnum = (typeof ProjectDetailsScalarFieldEnum)[keyof typeof ProjectDetailsScalarFieldEnum]


  export const LocalStateTxCborScalarFieldEnum: {
    id: 'id',
    txHash: 'txHash',
    cbor: 'cbor',
    localStatePolicy: 'localStatePolicy',
    validator: 'validator',
    createdAt: 'createdAt'
  };

  export type LocalStateTxCborScalarFieldEnum = (typeof LocalStateTxCborScalarFieldEnum)[keyof typeof LocalStateTxCborScalarFieldEnum]


  export const LocalStateTxOutputScalarFieldEnum: {
    id: 'id',
    utxoId: 'utxoId',
    localStatePolicy: 'localStatePolicy',
    validator: 'validator',
    createdAt: 'createdAt'
  };

  export type LocalStateTxOutputScalarFieldEnum = (typeof LocalStateTxOutputScalarFieldEnum)[keyof typeof LocalStateTxOutputScalarFieldEnum]


  export const TransactionSyncTipScalarFieldEnum: {
    id: 'id',
    slot: 'slot',
    blockHash: 'blockHash'
  };

  export type TransactionSyncTipScalarFieldEnum = (typeof TransactionSyncTipScalarFieldEnum)[keyof typeof TransactionSyncTipScalarFieldEnum]


  export const UtxoScalarFieldEnum: {
    id: 'id',
    txHash: 'txHash',
    index: 'index',
    address: 'address',
    plutusData: 'plutusData',
    scriptRef: 'scriptRef',
    coin: 'coin'
  };

  export type UtxoScalarFieldEnum = (typeof UtxoScalarFieldEnum)[keyof typeof UtxoScalarFieldEnum]


  export const MultiAssetScalarFieldEnum: {
    id: 'id',
    policyId: 'policyId',
    assetName: 'assetName',
    quantity: 'quantity',
    utxoId: 'utxoId'
  };

  export type MultiAssetScalarFieldEnum = (typeof MultiAssetScalarFieldEnum)[keyof typeof MultiAssetScalarFieldEnum]


  export const InstancePolicyScalarFieldEnum: {
    id: 'id',
    policyId: 'policyId',
    createdAt: 'createdAt'
  };

  export type InstancePolicyScalarFieldEnum = (typeof InstancePolicyScalarFieldEnum)[keyof typeof InstancePolicyScalarFieldEnum]


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
   * Reference to a field of type 'NetworkValidator'
   */
  export type EnumNetworkValidatorFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NetworkValidator'>
    


  /**
   * Reference to a field of type 'NetworkValidator[]'
   */
  export type ListEnumNetworkValidatorFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NetworkValidator[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'ScriptCategory'
   */
  export type EnumScriptCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ScriptCategory'>
    


  /**
   * Reference to a field of type 'ScriptCategory[]'
   */
  export type ListEnumScriptCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ScriptCategory[]'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


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


  export type NetworkTxCborWhereInput = {
    AND?: NetworkTxCborWhereInput | NetworkTxCborWhereInput[]
    OR?: NetworkTxCborWhereInput[]
    NOT?: NetworkTxCborWhereInput | NetworkTxCborWhereInput[]
    id?: IntFilter<"NetworkTxCbor"> | number
    txHash?: StringFilter<"NetworkTxCbor"> | string
    cbor?: StringFilter<"NetworkTxCbor"> | string
    validator?: EnumNetworkValidatorFilter<"NetworkTxCbor"> | $Enums.NetworkValidator
    createdAt?: DateTimeFilter<"NetworkTxCbor"> | Date | string
  }

  export type NetworkTxCborOrderByWithRelationInput = {
    id?: SortOrder
    txHash?: SortOrder
    cbor?: SortOrder
    validator?: SortOrder
    createdAt?: SortOrder
  }

  export type NetworkTxCborWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    txHash?: string
    AND?: NetworkTxCborWhereInput | NetworkTxCborWhereInput[]
    OR?: NetworkTxCborWhereInput[]
    NOT?: NetworkTxCborWhereInput | NetworkTxCborWhereInput[]
    cbor?: StringFilter<"NetworkTxCbor"> | string
    validator?: EnumNetworkValidatorFilter<"NetworkTxCbor"> | $Enums.NetworkValidator
    createdAt?: DateTimeFilter<"NetworkTxCbor"> | Date | string
  }, "id" | "txHash">

  export type NetworkTxCborOrderByWithAggregationInput = {
    id?: SortOrder
    txHash?: SortOrder
    cbor?: SortOrder
    validator?: SortOrder
    createdAt?: SortOrder
    _count?: NetworkTxCborCountOrderByAggregateInput
    _avg?: NetworkTxCborAvgOrderByAggregateInput
    _max?: NetworkTxCborMaxOrderByAggregateInput
    _min?: NetworkTxCborMinOrderByAggregateInput
    _sum?: NetworkTxCborSumOrderByAggregateInput
  }

  export type NetworkTxCborScalarWhereWithAggregatesInput = {
    AND?: NetworkTxCborScalarWhereWithAggregatesInput | NetworkTxCborScalarWhereWithAggregatesInput[]
    OR?: NetworkTxCborScalarWhereWithAggregatesInput[]
    NOT?: NetworkTxCborScalarWhereWithAggregatesInput | NetworkTxCborScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"NetworkTxCbor"> | number
    txHash?: StringWithAggregatesFilter<"NetworkTxCbor"> | string
    cbor?: StringWithAggregatesFilter<"NetworkTxCbor"> | string
    validator?: EnumNetworkValidatorWithAggregatesFilter<"NetworkTxCbor"> | $Enums.NetworkValidator
    createdAt?: DateTimeWithAggregatesFilter<"NetworkTxCbor"> | Date | string
  }

  export type NetworkTxOutputWhereInput = {
    AND?: NetworkTxOutputWhereInput | NetworkTxOutputWhereInput[]
    OR?: NetworkTxOutputWhereInput[]
    NOT?: NetworkTxOutputWhereInput | NetworkTxOutputWhereInput[]
    id?: IntFilter<"NetworkTxOutput"> | number
    utxoId?: IntFilter<"NetworkTxOutput"> | number
    validator?: EnumNetworkValidatorFilter<"NetworkTxOutput"> | $Enums.NetworkValidator
    createdAt?: DateTimeFilter<"NetworkTxOutput"> | Date | string
    utxo?: XOR<UtxoScalarRelationFilter, UtxoWhereInput>
  }

  export type NetworkTxOutputOrderByWithRelationInput = {
    id?: SortOrder
    utxoId?: SortOrder
    validator?: SortOrder
    createdAt?: SortOrder
    utxo?: UtxoOrderByWithRelationInput
  }

  export type NetworkTxOutputWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: NetworkTxOutputWhereInput | NetworkTxOutputWhereInput[]
    OR?: NetworkTxOutputWhereInput[]
    NOT?: NetworkTxOutputWhereInput | NetworkTxOutputWhereInput[]
    utxoId?: IntFilter<"NetworkTxOutput"> | number
    validator?: EnumNetworkValidatorFilter<"NetworkTxOutput"> | $Enums.NetworkValidator
    createdAt?: DateTimeFilter<"NetworkTxOutput"> | Date | string
    utxo?: XOR<UtxoScalarRelationFilter, UtxoWhereInput>
  }, "id">

  export type NetworkTxOutputOrderByWithAggregationInput = {
    id?: SortOrder
    utxoId?: SortOrder
    validator?: SortOrder
    createdAt?: SortOrder
    _count?: NetworkTxOutputCountOrderByAggregateInput
    _avg?: NetworkTxOutputAvgOrderByAggregateInput
    _max?: NetworkTxOutputMaxOrderByAggregateInput
    _min?: NetworkTxOutputMinOrderByAggregateInput
    _sum?: NetworkTxOutputSumOrderByAggregateInput
  }

  export type NetworkTxOutputScalarWhereWithAggregatesInput = {
    AND?: NetworkTxOutputScalarWhereWithAggregatesInput | NetworkTxOutputScalarWhereWithAggregatesInput[]
    OR?: NetworkTxOutputScalarWhereWithAggregatesInput[]
    NOT?: NetworkTxOutputScalarWhereWithAggregatesInput | NetworkTxOutputScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"NetworkTxOutput"> | number
    utxoId?: IntWithAggregatesFilter<"NetworkTxOutput"> | number
    validator?: EnumNetworkValidatorWithAggregatesFilter<"NetworkTxOutput"> | $Enums.NetworkValidator
    createdAt?: DateTimeWithAggregatesFilter<"NetworkTxOutput"> | Date | string
  }

  export type InstanceWhereInput = {
    AND?: InstanceWhereInput | InstanceWhereInput[]
    OR?: InstanceWhereInput[]
    NOT?: InstanceWhereInput | InstanceWhereInput[]
    id?: IntFilter<"Instance"> | number
    type?: EnumScriptCategoryFilter<"Instance"> | $Enums.ScriptCategory
    hash?: StringFilter<"Instance"> | string
    address?: StringFilter<"Instance"> | string
    instancePolicyId?: IntFilter<"Instance"> | number
    createdAt?: DateTimeFilter<"Instance"> | Date | string
    instancePolicy?: XOR<InstancePolicyScalarRelationFilter, InstancePolicyWhereInput>
  }

  export type InstanceOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    hash?: SortOrder
    address?: SortOrder
    instancePolicyId?: SortOrder
    createdAt?: SortOrder
    instancePolicy?: InstancePolicyOrderByWithRelationInput
  }

  export type InstanceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    hash?: string
    address?: string
    AND?: InstanceWhereInput | InstanceWhereInput[]
    OR?: InstanceWhereInput[]
    NOT?: InstanceWhereInput | InstanceWhereInput[]
    type?: EnumScriptCategoryFilter<"Instance"> | $Enums.ScriptCategory
    instancePolicyId?: IntFilter<"Instance"> | number
    createdAt?: DateTimeFilter<"Instance"> | Date | string
    instancePolicy?: XOR<InstancePolicyScalarRelationFilter, InstancePolicyWhereInput>
  }, "id" | "hash" | "address">

  export type InstanceOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    hash?: SortOrder
    address?: SortOrder
    instancePolicyId?: SortOrder
    createdAt?: SortOrder
    _count?: InstanceCountOrderByAggregateInput
    _avg?: InstanceAvgOrderByAggregateInput
    _max?: InstanceMaxOrderByAggregateInput
    _min?: InstanceMinOrderByAggregateInput
    _sum?: InstanceSumOrderByAggregateInput
  }

  export type InstanceScalarWhereWithAggregatesInput = {
    AND?: InstanceScalarWhereWithAggregatesInput | InstanceScalarWhereWithAggregatesInput[]
    OR?: InstanceScalarWhereWithAggregatesInput[]
    NOT?: InstanceScalarWhereWithAggregatesInput | InstanceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Instance"> | number
    type?: EnumScriptCategoryWithAggregatesFilter<"Instance"> | $Enums.ScriptCategory
    hash?: StringWithAggregatesFilter<"Instance"> | string
    address?: StringWithAggregatesFilter<"Instance"> | string
    instancePolicyId?: IntWithAggregatesFilter<"Instance"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Instance"> | Date | string
  }

  export type ProjectDetailsWhereInput = {
    AND?: ProjectDetailsWhereInput | ProjectDetailsWhereInput[]
    OR?: ProjectDetailsWhereInput[]
    NOT?: ProjectDetailsWhereInput | ProjectDetailsWhereInput[]
    id?: IntFilter<"ProjectDetails"> | number
    projectNftPolicy?: StringFilter<"ProjectDetails"> | string
    TreasuryTokenPolicy?: StringNullableFilter<"ProjectDetails"> | string | null
    TreasuryAddress?: StringNullableFilter<"ProjectDetails"> | string | null
    ContributorStateAddress?: StringNullableFilter<"ProjectDetails"> | string | null
    EscrowAddress?: StringNullableFilter<"ProjectDetails"> | string | null
    createdAt?: DateTimeFilter<"ProjectDetails"> | Date | string
  }

  export type ProjectDetailsOrderByWithRelationInput = {
    id?: SortOrder
    projectNftPolicy?: SortOrder
    TreasuryTokenPolicy?: SortOrderInput | SortOrder
    TreasuryAddress?: SortOrderInput | SortOrder
    ContributorStateAddress?: SortOrderInput | SortOrder
    EscrowAddress?: SortOrderInput | SortOrder
    createdAt?: SortOrder
  }

  export type ProjectDetailsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    projectNftPolicy?: string
    AND?: ProjectDetailsWhereInput | ProjectDetailsWhereInput[]
    OR?: ProjectDetailsWhereInput[]
    NOT?: ProjectDetailsWhereInput | ProjectDetailsWhereInput[]
    TreasuryTokenPolicy?: StringNullableFilter<"ProjectDetails"> | string | null
    TreasuryAddress?: StringNullableFilter<"ProjectDetails"> | string | null
    ContributorStateAddress?: StringNullableFilter<"ProjectDetails"> | string | null
    EscrowAddress?: StringNullableFilter<"ProjectDetails"> | string | null
    createdAt?: DateTimeFilter<"ProjectDetails"> | Date | string
  }, "id" | "projectNftPolicy">

  export type ProjectDetailsOrderByWithAggregationInput = {
    id?: SortOrder
    projectNftPolicy?: SortOrder
    TreasuryTokenPolicy?: SortOrderInput | SortOrder
    TreasuryAddress?: SortOrderInput | SortOrder
    ContributorStateAddress?: SortOrderInput | SortOrder
    EscrowAddress?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ProjectDetailsCountOrderByAggregateInput
    _avg?: ProjectDetailsAvgOrderByAggregateInput
    _max?: ProjectDetailsMaxOrderByAggregateInput
    _min?: ProjectDetailsMinOrderByAggregateInput
    _sum?: ProjectDetailsSumOrderByAggregateInput
  }

  export type ProjectDetailsScalarWhereWithAggregatesInput = {
    AND?: ProjectDetailsScalarWhereWithAggregatesInput | ProjectDetailsScalarWhereWithAggregatesInput[]
    OR?: ProjectDetailsScalarWhereWithAggregatesInput[]
    NOT?: ProjectDetailsScalarWhereWithAggregatesInput | ProjectDetailsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ProjectDetails"> | number
    projectNftPolicy?: StringWithAggregatesFilter<"ProjectDetails"> | string
    TreasuryTokenPolicy?: StringNullableWithAggregatesFilter<"ProjectDetails"> | string | null
    TreasuryAddress?: StringNullableWithAggregatesFilter<"ProjectDetails"> | string | null
    ContributorStateAddress?: StringNullableWithAggregatesFilter<"ProjectDetails"> | string | null
    EscrowAddress?: StringNullableWithAggregatesFilter<"ProjectDetails"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ProjectDetails"> | Date | string
  }

  export type LocalStateTxCborWhereInput = {
    AND?: LocalStateTxCborWhereInput | LocalStateTxCborWhereInput[]
    OR?: LocalStateTxCborWhereInput[]
    NOT?: LocalStateTxCborWhereInput | LocalStateTxCborWhereInput[]
    id?: IntFilter<"LocalStateTxCbor"> | number
    txHash?: StringFilter<"LocalStateTxCbor"> | string
    cbor?: StringFilter<"LocalStateTxCbor"> | string
    localStatePolicy?: StringFilter<"LocalStateTxCbor"> | string
    validator?: EnumScriptCategoryFilter<"LocalStateTxCbor"> | $Enums.ScriptCategory
    createdAt?: DateTimeFilter<"LocalStateTxCbor"> | Date | string
  }

  export type LocalStateTxCborOrderByWithRelationInput = {
    id?: SortOrder
    txHash?: SortOrder
    cbor?: SortOrder
    localStatePolicy?: SortOrder
    validator?: SortOrder
    createdAt?: SortOrder
  }

  export type LocalStateTxCborWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    txHash?: string
    AND?: LocalStateTxCborWhereInput | LocalStateTxCborWhereInput[]
    OR?: LocalStateTxCborWhereInput[]
    NOT?: LocalStateTxCborWhereInput | LocalStateTxCborWhereInput[]
    cbor?: StringFilter<"LocalStateTxCbor"> | string
    localStatePolicy?: StringFilter<"LocalStateTxCbor"> | string
    validator?: EnumScriptCategoryFilter<"LocalStateTxCbor"> | $Enums.ScriptCategory
    createdAt?: DateTimeFilter<"LocalStateTxCbor"> | Date | string
  }, "id" | "txHash">

  export type LocalStateTxCborOrderByWithAggregationInput = {
    id?: SortOrder
    txHash?: SortOrder
    cbor?: SortOrder
    localStatePolicy?: SortOrder
    validator?: SortOrder
    createdAt?: SortOrder
    _count?: LocalStateTxCborCountOrderByAggregateInput
    _avg?: LocalStateTxCborAvgOrderByAggregateInput
    _max?: LocalStateTxCborMaxOrderByAggregateInput
    _min?: LocalStateTxCborMinOrderByAggregateInput
    _sum?: LocalStateTxCborSumOrderByAggregateInput
  }

  export type LocalStateTxCborScalarWhereWithAggregatesInput = {
    AND?: LocalStateTxCborScalarWhereWithAggregatesInput | LocalStateTxCborScalarWhereWithAggregatesInput[]
    OR?: LocalStateTxCborScalarWhereWithAggregatesInput[]
    NOT?: LocalStateTxCborScalarWhereWithAggregatesInput | LocalStateTxCborScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"LocalStateTxCbor"> | number
    txHash?: StringWithAggregatesFilter<"LocalStateTxCbor"> | string
    cbor?: StringWithAggregatesFilter<"LocalStateTxCbor"> | string
    localStatePolicy?: StringWithAggregatesFilter<"LocalStateTxCbor"> | string
    validator?: EnumScriptCategoryWithAggregatesFilter<"LocalStateTxCbor"> | $Enums.ScriptCategory
    createdAt?: DateTimeWithAggregatesFilter<"LocalStateTxCbor"> | Date | string
  }

  export type LocalStateTxOutputWhereInput = {
    AND?: LocalStateTxOutputWhereInput | LocalStateTxOutputWhereInput[]
    OR?: LocalStateTxOutputWhereInput[]
    NOT?: LocalStateTxOutputWhereInput | LocalStateTxOutputWhereInput[]
    id?: IntFilter<"LocalStateTxOutput"> | number
    utxoId?: IntFilter<"LocalStateTxOutput"> | number
    localStatePolicy?: StringFilter<"LocalStateTxOutput"> | string
    validator?: EnumScriptCategoryFilter<"LocalStateTxOutput"> | $Enums.ScriptCategory
    createdAt?: DateTimeFilter<"LocalStateTxOutput"> | Date | string
    utxo?: XOR<UtxoScalarRelationFilter, UtxoWhereInput>
  }

  export type LocalStateTxOutputOrderByWithRelationInput = {
    id?: SortOrder
    utxoId?: SortOrder
    localStatePolicy?: SortOrder
    validator?: SortOrder
    createdAt?: SortOrder
    utxo?: UtxoOrderByWithRelationInput
  }

  export type LocalStateTxOutputWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: LocalStateTxOutputWhereInput | LocalStateTxOutputWhereInput[]
    OR?: LocalStateTxOutputWhereInput[]
    NOT?: LocalStateTxOutputWhereInput | LocalStateTxOutputWhereInput[]
    utxoId?: IntFilter<"LocalStateTxOutput"> | number
    localStatePolicy?: StringFilter<"LocalStateTxOutput"> | string
    validator?: EnumScriptCategoryFilter<"LocalStateTxOutput"> | $Enums.ScriptCategory
    createdAt?: DateTimeFilter<"LocalStateTxOutput"> | Date | string
    utxo?: XOR<UtxoScalarRelationFilter, UtxoWhereInput>
  }, "id">

  export type LocalStateTxOutputOrderByWithAggregationInput = {
    id?: SortOrder
    utxoId?: SortOrder
    localStatePolicy?: SortOrder
    validator?: SortOrder
    createdAt?: SortOrder
    _count?: LocalStateTxOutputCountOrderByAggregateInput
    _avg?: LocalStateTxOutputAvgOrderByAggregateInput
    _max?: LocalStateTxOutputMaxOrderByAggregateInput
    _min?: LocalStateTxOutputMinOrderByAggregateInput
    _sum?: LocalStateTxOutputSumOrderByAggregateInput
  }

  export type LocalStateTxOutputScalarWhereWithAggregatesInput = {
    AND?: LocalStateTxOutputScalarWhereWithAggregatesInput | LocalStateTxOutputScalarWhereWithAggregatesInput[]
    OR?: LocalStateTxOutputScalarWhereWithAggregatesInput[]
    NOT?: LocalStateTxOutputScalarWhereWithAggregatesInput | LocalStateTxOutputScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"LocalStateTxOutput"> | number
    utxoId?: IntWithAggregatesFilter<"LocalStateTxOutput"> | number
    localStatePolicy?: StringWithAggregatesFilter<"LocalStateTxOutput"> | string
    validator?: EnumScriptCategoryWithAggregatesFilter<"LocalStateTxOutput"> | $Enums.ScriptCategory
    createdAt?: DateTimeWithAggregatesFilter<"LocalStateTxOutput"> | Date | string
  }

  export type TransactionSyncTipWhereInput = {
    AND?: TransactionSyncTipWhereInput | TransactionSyncTipWhereInput[]
    OR?: TransactionSyncTipWhereInput[]
    NOT?: TransactionSyncTipWhereInput | TransactionSyncTipWhereInput[]
    id?: IntFilter<"TransactionSyncTip"> | number
    slot?: IntFilter<"TransactionSyncTip"> | number
    blockHash?: StringFilter<"TransactionSyncTip"> | string
  }

  export type TransactionSyncTipOrderByWithRelationInput = {
    id?: SortOrder
    slot?: SortOrder
    blockHash?: SortOrder
  }

  export type TransactionSyncTipWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    slot?: number
    blockHash?: string
    AND?: TransactionSyncTipWhereInput | TransactionSyncTipWhereInput[]
    OR?: TransactionSyncTipWhereInput[]
    NOT?: TransactionSyncTipWhereInput | TransactionSyncTipWhereInput[]
  }, "id" | "slot" | "blockHash">

  export type TransactionSyncTipOrderByWithAggregationInput = {
    id?: SortOrder
    slot?: SortOrder
    blockHash?: SortOrder
    _count?: TransactionSyncTipCountOrderByAggregateInput
    _avg?: TransactionSyncTipAvgOrderByAggregateInput
    _max?: TransactionSyncTipMaxOrderByAggregateInput
    _min?: TransactionSyncTipMinOrderByAggregateInput
    _sum?: TransactionSyncTipSumOrderByAggregateInput
  }

  export type TransactionSyncTipScalarWhereWithAggregatesInput = {
    AND?: TransactionSyncTipScalarWhereWithAggregatesInput | TransactionSyncTipScalarWhereWithAggregatesInput[]
    OR?: TransactionSyncTipScalarWhereWithAggregatesInput[]
    NOT?: TransactionSyncTipScalarWhereWithAggregatesInput | TransactionSyncTipScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TransactionSyncTip"> | number
    slot?: IntWithAggregatesFilter<"TransactionSyncTip"> | number
    blockHash?: StringWithAggregatesFilter<"TransactionSyncTip"> | string
  }

  export type UtxoWhereInput = {
    AND?: UtxoWhereInput | UtxoWhereInput[]
    OR?: UtxoWhereInput[]
    NOT?: UtxoWhereInput | UtxoWhereInput[]
    id?: IntFilter<"Utxo"> | number
    txHash?: StringFilter<"Utxo"> | string
    index?: IntFilter<"Utxo"> | number
    address?: StringFilter<"Utxo"> | string
    plutusData?: StringNullableFilter<"Utxo"> | string | null
    scriptRef?: StringNullableFilter<"Utxo"> | string | null
    coin?: BigIntFilter<"Utxo"> | bigint | number
    MultiAsset?: MultiAssetListRelationFilter
    NetworkTxOutput?: NetworkTxOutputListRelationFilter
    LocalStateTxOutput?: LocalStateTxOutputListRelationFilter
  }

  export type UtxoOrderByWithRelationInput = {
    id?: SortOrder
    txHash?: SortOrder
    index?: SortOrder
    address?: SortOrder
    plutusData?: SortOrderInput | SortOrder
    scriptRef?: SortOrderInput | SortOrder
    coin?: SortOrder
    MultiAsset?: MultiAssetOrderByRelationAggregateInput
    NetworkTxOutput?: NetworkTxOutputOrderByRelationAggregateInput
    LocalStateTxOutput?: LocalStateTxOutputOrderByRelationAggregateInput
  }

  export type UtxoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    txHash_index?: UtxoTxHashIndexCompoundUniqueInput
    AND?: UtxoWhereInput | UtxoWhereInput[]
    OR?: UtxoWhereInput[]
    NOT?: UtxoWhereInput | UtxoWhereInput[]
    txHash?: StringFilter<"Utxo"> | string
    index?: IntFilter<"Utxo"> | number
    address?: StringFilter<"Utxo"> | string
    plutusData?: StringNullableFilter<"Utxo"> | string | null
    scriptRef?: StringNullableFilter<"Utxo"> | string | null
    coin?: BigIntFilter<"Utxo"> | bigint | number
    MultiAsset?: MultiAssetListRelationFilter
    NetworkTxOutput?: NetworkTxOutputListRelationFilter
    LocalStateTxOutput?: LocalStateTxOutputListRelationFilter
  }, "id" | "txHash_index">

  export type UtxoOrderByWithAggregationInput = {
    id?: SortOrder
    txHash?: SortOrder
    index?: SortOrder
    address?: SortOrder
    plutusData?: SortOrderInput | SortOrder
    scriptRef?: SortOrderInput | SortOrder
    coin?: SortOrder
    _count?: UtxoCountOrderByAggregateInput
    _avg?: UtxoAvgOrderByAggregateInput
    _max?: UtxoMaxOrderByAggregateInput
    _min?: UtxoMinOrderByAggregateInput
    _sum?: UtxoSumOrderByAggregateInput
  }

  export type UtxoScalarWhereWithAggregatesInput = {
    AND?: UtxoScalarWhereWithAggregatesInput | UtxoScalarWhereWithAggregatesInput[]
    OR?: UtxoScalarWhereWithAggregatesInput[]
    NOT?: UtxoScalarWhereWithAggregatesInput | UtxoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Utxo"> | number
    txHash?: StringWithAggregatesFilter<"Utxo"> | string
    index?: IntWithAggregatesFilter<"Utxo"> | number
    address?: StringWithAggregatesFilter<"Utxo"> | string
    plutusData?: StringNullableWithAggregatesFilter<"Utxo"> | string | null
    scriptRef?: StringNullableWithAggregatesFilter<"Utxo"> | string | null
    coin?: BigIntWithAggregatesFilter<"Utxo"> | bigint | number
  }

  export type MultiAssetWhereInput = {
    AND?: MultiAssetWhereInput | MultiAssetWhereInput[]
    OR?: MultiAssetWhereInput[]
    NOT?: MultiAssetWhereInput | MultiAssetWhereInput[]
    id?: IntFilter<"MultiAsset"> | number
    policyId?: StringFilter<"MultiAsset"> | string
    assetName?: StringFilter<"MultiAsset"> | string
    quantity?: BigIntFilter<"MultiAsset"> | bigint | number
    utxoId?: IntNullableFilter<"MultiAsset"> | number | null
    Utxo?: XOR<UtxoNullableScalarRelationFilter, UtxoWhereInput> | null
  }

  export type MultiAssetOrderByWithRelationInput = {
    id?: SortOrder
    policyId?: SortOrder
    assetName?: SortOrder
    quantity?: SortOrder
    utxoId?: SortOrderInput | SortOrder
    Utxo?: UtxoOrderByWithRelationInput
  }

  export type MultiAssetWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MultiAssetWhereInput | MultiAssetWhereInput[]
    OR?: MultiAssetWhereInput[]
    NOT?: MultiAssetWhereInput | MultiAssetWhereInput[]
    policyId?: StringFilter<"MultiAsset"> | string
    assetName?: StringFilter<"MultiAsset"> | string
    quantity?: BigIntFilter<"MultiAsset"> | bigint | number
    utxoId?: IntNullableFilter<"MultiAsset"> | number | null
    Utxo?: XOR<UtxoNullableScalarRelationFilter, UtxoWhereInput> | null
  }, "id">

  export type MultiAssetOrderByWithAggregationInput = {
    id?: SortOrder
    policyId?: SortOrder
    assetName?: SortOrder
    quantity?: SortOrder
    utxoId?: SortOrderInput | SortOrder
    _count?: MultiAssetCountOrderByAggregateInput
    _avg?: MultiAssetAvgOrderByAggregateInput
    _max?: MultiAssetMaxOrderByAggregateInput
    _min?: MultiAssetMinOrderByAggregateInput
    _sum?: MultiAssetSumOrderByAggregateInput
  }

  export type MultiAssetScalarWhereWithAggregatesInput = {
    AND?: MultiAssetScalarWhereWithAggregatesInput | MultiAssetScalarWhereWithAggregatesInput[]
    OR?: MultiAssetScalarWhereWithAggregatesInput[]
    NOT?: MultiAssetScalarWhereWithAggregatesInput | MultiAssetScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"MultiAsset"> | number
    policyId?: StringWithAggregatesFilter<"MultiAsset"> | string
    assetName?: StringWithAggregatesFilter<"MultiAsset"> | string
    quantity?: BigIntWithAggregatesFilter<"MultiAsset"> | bigint | number
    utxoId?: IntNullableWithAggregatesFilter<"MultiAsset"> | number | null
  }

  export type InstancePolicyWhereInput = {
    AND?: InstancePolicyWhereInput | InstancePolicyWhereInput[]
    OR?: InstancePolicyWhereInput[]
    NOT?: InstancePolicyWhereInput | InstancePolicyWhereInput[]
    id?: IntFilter<"InstancePolicy"> | number
    policyId?: StringFilter<"InstancePolicy"> | string
    createdAt?: DateTimeFilter<"InstancePolicy"> | Date | string
    Instance?: InstanceListRelationFilter
  }

  export type InstancePolicyOrderByWithRelationInput = {
    id?: SortOrder
    policyId?: SortOrder
    createdAt?: SortOrder
    Instance?: InstanceOrderByRelationAggregateInput
  }

  export type InstancePolicyWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    policyId?: string
    AND?: InstancePolicyWhereInput | InstancePolicyWhereInput[]
    OR?: InstancePolicyWhereInput[]
    NOT?: InstancePolicyWhereInput | InstancePolicyWhereInput[]
    createdAt?: DateTimeFilter<"InstancePolicy"> | Date | string
    Instance?: InstanceListRelationFilter
  }, "id" | "policyId">

  export type InstancePolicyOrderByWithAggregationInput = {
    id?: SortOrder
    policyId?: SortOrder
    createdAt?: SortOrder
    _count?: InstancePolicyCountOrderByAggregateInput
    _avg?: InstancePolicyAvgOrderByAggregateInput
    _max?: InstancePolicyMaxOrderByAggregateInput
    _min?: InstancePolicyMinOrderByAggregateInput
    _sum?: InstancePolicySumOrderByAggregateInput
  }

  export type InstancePolicyScalarWhereWithAggregatesInput = {
    AND?: InstancePolicyScalarWhereWithAggregatesInput | InstancePolicyScalarWhereWithAggregatesInput[]
    OR?: InstancePolicyScalarWhereWithAggregatesInput[]
    NOT?: InstancePolicyScalarWhereWithAggregatesInput | InstancePolicyScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"InstancePolicy"> | number
    policyId?: StringWithAggregatesFilter<"InstancePolicy"> | string
    createdAt?: DateTimeWithAggregatesFilter<"InstancePolicy"> | Date | string
  }

  export type NetworkTxCborCreateInput = {
    txHash: string
    cbor: string
    validator: $Enums.NetworkValidator
    createdAt?: Date | string
  }

  export type NetworkTxCborUncheckedCreateInput = {
    id?: number
    txHash: string
    cbor: string
    validator: $Enums.NetworkValidator
    createdAt?: Date | string
  }

  export type NetworkTxCborUpdateInput = {
    txHash?: StringFieldUpdateOperationsInput | string
    cbor?: StringFieldUpdateOperationsInput | string
    validator?: EnumNetworkValidatorFieldUpdateOperationsInput | $Enums.NetworkValidator
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NetworkTxCborUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    txHash?: StringFieldUpdateOperationsInput | string
    cbor?: StringFieldUpdateOperationsInput | string
    validator?: EnumNetworkValidatorFieldUpdateOperationsInput | $Enums.NetworkValidator
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NetworkTxCborCreateManyInput = {
    id?: number
    txHash: string
    cbor: string
    validator: $Enums.NetworkValidator
    createdAt?: Date | string
  }

  export type NetworkTxCborUpdateManyMutationInput = {
    txHash?: StringFieldUpdateOperationsInput | string
    cbor?: StringFieldUpdateOperationsInput | string
    validator?: EnumNetworkValidatorFieldUpdateOperationsInput | $Enums.NetworkValidator
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NetworkTxCborUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    txHash?: StringFieldUpdateOperationsInput | string
    cbor?: StringFieldUpdateOperationsInput | string
    validator?: EnumNetworkValidatorFieldUpdateOperationsInput | $Enums.NetworkValidator
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NetworkTxOutputCreateInput = {
    validator: $Enums.NetworkValidator
    createdAt?: Date | string
    utxo: UtxoCreateNestedOneWithoutNetworkTxOutputInput
  }

  export type NetworkTxOutputUncheckedCreateInput = {
    id?: number
    utxoId: number
    validator: $Enums.NetworkValidator
    createdAt?: Date | string
  }

  export type NetworkTxOutputUpdateInput = {
    validator?: EnumNetworkValidatorFieldUpdateOperationsInput | $Enums.NetworkValidator
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    utxo?: UtxoUpdateOneRequiredWithoutNetworkTxOutputNestedInput
  }

  export type NetworkTxOutputUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    utxoId?: IntFieldUpdateOperationsInput | number
    validator?: EnumNetworkValidatorFieldUpdateOperationsInput | $Enums.NetworkValidator
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NetworkTxOutputCreateManyInput = {
    id?: number
    utxoId: number
    validator: $Enums.NetworkValidator
    createdAt?: Date | string
  }

  export type NetworkTxOutputUpdateManyMutationInput = {
    validator?: EnumNetworkValidatorFieldUpdateOperationsInput | $Enums.NetworkValidator
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NetworkTxOutputUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    utxoId?: IntFieldUpdateOperationsInput | number
    validator?: EnumNetworkValidatorFieldUpdateOperationsInput | $Enums.NetworkValidator
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InstanceCreateInput = {
    type: $Enums.ScriptCategory
    hash: string
    address: string
    createdAt?: Date | string
    instancePolicy: InstancePolicyCreateNestedOneWithoutInstanceInput
  }

  export type InstanceUncheckedCreateInput = {
    id?: number
    type: $Enums.ScriptCategory
    hash: string
    address: string
    instancePolicyId: number
    createdAt?: Date | string
  }

  export type InstanceUpdateInput = {
    type?: EnumScriptCategoryFieldUpdateOperationsInput | $Enums.ScriptCategory
    hash?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    instancePolicy?: InstancePolicyUpdateOneRequiredWithoutInstanceNestedInput
  }

  export type InstanceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumScriptCategoryFieldUpdateOperationsInput | $Enums.ScriptCategory
    hash?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    instancePolicyId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InstanceCreateManyInput = {
    id?: number
    type: $Enums.ScriptCategory
    hash: string
    address: string
    instancePolicyId: number
    createdAt?: Date | string
  }

  export type InstanceUpdateManyMutationInput = {
    type?: EnumScriptCategoryFieldUpdateOperationsInput | $Enums.ScriptCategory
    hash?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InstanceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumScriptCategoryFieldUpdateOperationsInput | $Enums.ScriptCategory
    hash?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    instancePolicyId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectDetailsCreateInput = {
    projectNftPolicy: string
    TreasuryTokenPolicy?: string | null
    TreasuryAddress?: string | null
    ContributorStateAddress?: string | null
    EscrowAddress?: string | null
    createdAt?: Date | string
  }

  export type ProjectDetailsUncheckedCreateInput = {
    id?: number
    projectNftPolicy: string
    TreasuryTokenPolicy?: string | null
    TreasuryAddress?: string | null
    ContributorStateAddress?: string | null
    EscrowAddress?: string | null
    createdAt?: Date | string
  }

  export type ProjectDetailsUpdateInput = {
    projectNftPolicy?: StringFieldUpdateOperationsInput | string
    TreasuryTokenPolicy?: NullableStringFieldUpdateOperationsInput | string | null
    TreasuryAddress?: NullableStringFieldUpdateOperationsInput | string | null
    ContributorStateAddress?: NullableStringFieldUpdateOperationsInput | string | null
    EscrowAddress?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectDetailsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    projectNftPolicy?: StringFieldUpdateOperationsInput | string
    TreasuryTokenPolicy?: NullableStringFieldUpdateOperationsInput | string | null
    TreasuryAddress?: NullableStringFieldUpdateOperationsInput | string | null
    ContributorStateAddress?: NullableStringFieldUpdateOperationsInput | string | null
    EscrowAddress?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectDetailsCreateManyInput = {
    id?: number
    projectNftPolicy: string
    TreasuryTokenPolicy?: string | null
    TreasuryAddress?: string | null
    ContributorStateAddress?: string | null
    EscrowAddress?: string | null
    createdAt?: Date | string
  }

  export type ProjectDetailsUpdateManyMutationInput = {
    projectNftPolicy?: StringFieldUpdateOperationsInput | string
    TreasuryTokenPolicy?: NullableStringFieldUpdateOperationsInput | string | null
    TreasuryAddress?: NullableStringFieldUpdateOperationsInput | string | null
    ContributorStateAddress?: NullableStringFieldUpdateOperationsInput | string | null
    EscrowAddress?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectDetailsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    projectNftPolicy?: StringFieldUpdateOperationsInput | string
    TreasuryTokenPolicy?: NullableStringFieldUpdateOperationsInput | string | null
    TreasuryAddress?: NullableStringFieldUpdateOperationsInput | string | null
    ContributorStateAddress?: NullableStringFieldUpdateOperationsInput | string | null
    EscrowAddress?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LocalStateTxCborCreateInput = {
    txHash: string
    cbor: string
    localStatePolicy: string
    validator: $Enums.ScriptCategory
    createdAt?: Date | string
  }

  export type LocalStateTxCborUncheckedCreateInput = {
    id?: number
    txHash: string
    cbor: string
    localStatePolicy: string
    validator: $Enums.ScriptCategory
    createdAt?: Date | string
  }

  export type LocalStateTxCborUpdateInput = {
    txHash?: StringFieldUpdateOperationsInput | string
    cbor?: StringFieldUpdateOperationsInput | string
    localStatePolicy?: StringFieldUpdateOperationsInput | string
    validator?: EnumScriptCategoryFieldUpdateOperationsInput | $Enums.ScriptCategory
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LocalStateTxCborUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    txHash?: StringFieldUpdateOperationsInput | string
    cbor?: StringFieldUpdateOperationsInput | string
    localStatePolicy?: StringFieldUpdateOperationsInput | string
    validator?: EnumScriptCategoryFieldUpdateOperationsInput | $Enums.ScriptCategory
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LocalStateTxCborCreateManyInput = {
    id?: number
    txHash: string
    cbor: string
    localStatePolicy: string
    validator: $Enums.ScriptCategory
    createdAt?: Date | string
  }

  export type LocalStateTxCborUpdateManyMutationInput = {
    txHash?: StringFieldUpdateOperationsInput | string
    cbor?: StringFieldUpdateOperationsInput | string
    localStatePolicy?: StringFieldUpdateOperationsInput | string
    validator?: EnumScriptCategoryFieldUpdateOperationsInput | $Enums.ScriptCategory
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LocalStateTxCborUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    txHash?: StringFieldUpdateOperationsInput | string
    cbor?: StringFieldUpdateOperationsInput | string
    localStatePolicy?: StringFieldUpdateOperationsInput | string
    validator?: EnumScriptCategoryFieldUpdateOperationsInput | $Enums.ScriptCategory
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LocalStateTxOutputCreateInput = {
    localStatePolicy: string
    validator: $Enums.ScriptCategory
    createdAt?: Date | string
    utxo: UtxoCreateNestedOneWithoutLocalStateTxOutputInput
  }

  export type LocalStateTxOutputUncheckedCreateInput = {
    id?: number
    utxoId: number
    localStatePolicy: string
    validator: $Enums.ScriptCategory
    createdAt?: Date | string
  }

  export type LocalStateTxOutputUpdateInput = {
    localStatePolicy?: StringFieldUpdateOperationsInput | string
    validator?: EnumScriptCategoryFieldUpdateOperationsInput | $Enums.ScriptCategory
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    utxo?: UtxoUpdateOneRequiredWithoutLocalStateTxOutputNestedInput
  }

  export type LocalStateTxOutputUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    utxoId?: IntFieldUpdateOperationsInput | number
    localStatePolicy?: StringFieldUpdateOperationsInput | string
    validator?: EnumScriptCategoryFieldUpdateOperationsInput | $Enums.ScriptCategory
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LocalStateTxOutputCreateManyInput = {
    id?: number
    utxoId: number
    localStatePolicy: string
    validator: $Enums.ScriptCategory
    createdAt?: Date | string
  }

  export type LocalStateTxOutputUpdateManyMutationInput = {
    localStatePolicy?: StringFieldUpdateOperationsInput | string
    validator?: EnumScriptCategoryFieldUpdateOperationsInput | $Enums.ScriptCategory
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LocalStateTxOutputUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    utxoId?: IntFieldUpdateOperationsInput | number
    localStatePolicy?: StringFieldUpdateOperationsInput | string
    validator?: EnumScriptCategoryFieldUpdateOperationsInput | $Enums.ScriptCategory
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionSyncTipCreateInput = {
    slot: number
    blockHash: string
  }

  export type TransactionSyncTipUncheckedCreateInput = {
    id?: number
    slot: number
    blockHash: string
  }

  export type TransactionSyncTipUpdateInput = {
    slot?: IntFieldUpdateOperationsInput | number
    blockHash?: StringFieldUpdateOperationsInput | string
  }

  export type TransactionSyncTipUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    slot?: IntFieldUpdateOperationsInput | number
    blockHash?: StringFieldUpdateOperationsInput | string
  }

  export type TransactionSyncTipCreateManyInput = {
    id?: number
    slot: number
    blockHash: string
  }

  export type TransactionSyncTipUpdateManyMutationInput = {
    slot?: IntFieldUpdateOperationsInput | number
    blockHash?: StringFieldUpdateOperationsInput | string
  }

  export type TransactionSyncTipUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    slot?: IntFieldUpdateOperationsInput | number
    blockHash?: StringFieldUpdateOperationsInput | string
  }

  export type UtxoCreateInput = {
    txHash: string
    index: number
    address: string
    plutusData?: string | null
    scriptRef?: string | null
    coin: bigint | number
    MultiAsset?: MultiAssetCreateNestedManyWithoutUtxoInput
    NetworkTxOutput?: NetworkTxOutputCreateNestedManyWithoutUtxoInput
    LocalStateTxOutput?: LocalStateTxOutputCreateNestedManyWithoutUtxoInput
  }

  export type UtxoUncheckedCreateInput = {
    id?: number
    txHash: string
    index: number
    address: string
    plutusData?: string | null
    scriptRef?: string | null
    coin: bigint | number
    MultiAsset?: MultiAssetUncheckedCreateNestedManyWithoutUtxoInput
    NetworkTxOutput?: NetworkTxOutputUncheckedCreateNestedManyWithoutUtxoInput
    LocalStateTxOutput?: LocalStateTxOutputUncheckedCreateNestedManyWithoutUtxoInput
  }

  export type UtxoUpdateInput = {
    txHash?: StringFieldUpdateOperationsInput | string
    index?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    plutusData?: NullableStringFieldUpdateOperationsInput | string | null
    scriptRef?: NullableStringFieldUpdateOperationsInput | string | null
    coin?: BigIntFieldUpdateOperationsInput | bigint | number
    MultiAsset?: MultiAssetUpdateManyWithoutUtxoNestedInput
    NetworkTxOutput?: NetworkTxOutputUpdateManyWithoutUtxoNestedInput
    LocalStateTxOutput?: LocalStateTxOutputUpdateManyWithoutUtxoNestedInput
  }

  export type UtxoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    txHash?: StringFieldUpdateOperationsInput | string
    index?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    plutusData?: NullableStringFieldUpdateOperationsInput | string | null
    scriptRef?: NullableStringFieldUpdateOperationsInput | string | null
    coin?: BigIntFieldUpdateOperationsInput | bigint | number
    MultiAsset?: MultiAssetUncheckedUpdateManyWithoutUtxoNestedInput
    NetworkTxOutput?: NetworkTxOutputUncheckedUpdateManyWithoutUtxoNestedInput
    LocalStateTxOutput?: LocalStateTxOutputUncheckedUpdateManyWithoutUtxoNestedInput
  }

  export type UtxoCreateManyInput = {
    id?: number
    txHash: string
    index: number
    address: string
    plutusData?: string | null
    scriptRef?: string | null
    coin: bigint | number
  }

  export type UtxoUpdateManyMutationInput = {
    txHash?: StringFieldUpdateOperationsInput | string
    index?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    plutusData?: NullableStringFieldUpdateOperationsInput | string | null
    scriptRef?: NullableStringFieldUpdateOperationsInput | string | null
    coin?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type UtxoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    txHash?: StringFieldUpdateOperationsInput | string
    index?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    plutusData?: NullableStringFieldUpdateOperationsInput | string | null
    scriptRef?: NullableStringFieldUpdateOperationsInput | string | null
    coin?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type MultiAssetCreateInput = {
    policyId: string
    assetName: string
    quantity: bigint | number
    Utxo?: UtxoCreateNestedOneWithoutMultiAssetInput
  }

  export type MultiAssetUncheckedCreateInput = {
    id?: number
    policyId: string
    assetName: string
    quantity: bigint | number
    utxoId?: number | null
  }

  export type MultiAssetUpdateInput = {
    policyId?: StringFieldUpdateOperationsInput | string
    assetName?: StringFieldUpdateOperationsInput | string
    quantity?: BigIntFieldUpdateOperationsInput | bigint | number
    Utxo?: UtxoUpdateOneWithoutMultiAssetNestedInput
  }

  export type MultiAssetUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    policyId?: StringFieldUpdateOperationsInput | string
    assetName?: StringFieldUpdateOperationsInput | string
    quantity?: BigIntFieldUpdateOperationsInput | bigint | number
    utxoId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type MultiAssetCreateManyInput = {
    id?: number
    policyId: string
    assetName: string
    quantity: bigint | number
    utxoId?: number | null
  }

  export type MultiAssetUpdateManyMutationInput = {
    policyId?: StringFieldUpdateOperationsInput | string
    assetName?: StringFieldUpdateOperationsInput | string
    quantity?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type MultiAssetUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    policyId?: StringFieldUpdateOperationsInput | string
    assetName?: StringFieldUpdateOperationsInput | string
    quantity?: BigIntFieldUpdateOperationsInput | bigint | number
    utxoId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type InstancePolicyCreateInput = {
    policyId: string
    createdAt?: Date | string
    Instance?: InstanceCreateNestedManyWithoutInstancePolicyInput
  }

  export type InstancePolicyUncheckedCreateInput = {
    id?: number
    policyId: string
    createdAt?: Date | string
    Instance?: InstanceUncheckedCreateNestedManyWithoutInstancePolicyInput
  }

  export type InstancePolicyUpdateInput = {
    policyId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Instance?: InstanceUpdateManyWithoutInstancePolicyNestedInput
  }

  export type InstancePolicyUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    policyId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Instance?: InstanceUncheckedUpdateManyWithoutInstancePolicyNestedInput
  }

  export type InstancePolicyCreateManyInput = {
    id?: number
    policyId: string
    createdAt?: Date | string
  }

  export type InstancePolicyUpdateManyMutationInput = {
    policyId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InstancePolicyUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    policyId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type EnumNetworkValidatorFilter<$PrismaModel = never> = {
    equals?: $Enums.NetworkValidator | EnumNetworkValidatorFieldRefInput<$PrismaModel>
    in?: $Enums.NetworkValidator[] | ListEnumNetworkValidatorFieldRefInput<$PrismaModel>
    notIn?: $Enums.NetworkValidator[] | ListEnumNetworkValidatorFieldRefInput<$PrismaModel>
    not?: NestedEnumNetworkValidatorFilter<$PrismaModel> | $Enums.NetworkValidator
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

  export type NetworkTxCborCountOrderByAggregateInput = {
    id?: SortOrder
    txHash?: SortOrder
    cbor?: SortOrder
    validator?: SortOrder
    createdAt?: SortOrder
  }

  export type NetworkTxCborAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type NetworkTxCborMaxOrderByAggregateInput = {
    id?: SortOrder
    txHash?: SortOrder
    cbor?: SortOrder
    validator?: SortOrder
    createdAt?: SortOrder
  }

  export type NetworkTxCborMinOrderByAggregateInput = {
    id?: SortOrder
    txHash?: SortOrder
    cbor?: SortOrder
    validator?: SortOrder
    createdAt?: SortOrder
  }

  export type NetworkTxCborSumOrderByAggregateInput = {
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

  export type EnumNetworkValidatorWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NetworkValidator | EnumNetworkValidatorFieldRefInput<$PrismaModel>
    in?: $Enums.NetworkValidator[] | ListEnumNetworkValidatorFieldRefInput<$PrismaModel>
    notIn?: $Enums.NetworkValidator[] | ListEnumNetworkValidatorFieldRefInput<$PrismaModel>
    not?: NestedEnumNetworkValidatorWithAggregatesFilter<$PrismaModel> | $Enums.NetworkValidator
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumNetworkValidatorFilter<$PrismaModel>
    _max?: NestedEnumNetworkValidatorFilter<$PrismaModel>
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

  export type UtxoScalarRelationFilter = {
    is?: UtxoWhereInput
    isNot?: UtxoWhereInput
  }

  export type NetworkTxOutputCountOrderByAggregateInput = {
    id?: SortOrder
    utxoId?: SortOrder
    validator?: SortOrder
    createdAt?: SortOrder
  }

  export type NetworkTxOutputAvgOrderByAggregateInput = {
    id?: SortOrder
    utxoId?: SortOrder
  }

  export type NetworkTxOutputMaxOrderByAggregateInput = {
    id?: SortOrder
    utxoId?: SortOrder
    validator?: SortOrder
    createdAt?: SortOrder
  }

  export type NetworkTxOutputMinOrderByAggregateInput = {
    id?: SortOrder
    utxoId?: SortOrder
    validator?: SortOrder
    createdAt?: SortOrder
  }

  export type NetworkTxOutputSumOrderByAggregateInput = {
    id?: SortOrder
    utxoId?: SortOrder
  }

  export type EnumScriptCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.ScriptCategory | EnumScriptCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.ScriptCategory[] | ListEnumScriptCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.ScriptCategory[] | ListEnumScriptCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumScriptCategoryFilter<$PrismaModel> | $Enums.ScriptCategory
  }

  export type InstancePolicyScalarRelationFilter = {
    is?: InstancePolicyWhereInput
    isNot?: InstancePolicyWhereInput
  }

  export type InstanceCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    hash?: SortOrder
    address?: SortOrder
    instancePolicyId?: SortOrder
    createdAt?: SortOrder
  }

  export type InstanceAvgOrderByAggregateInput = {
    id?: SortOrder
    instancePolicyId?: SortOrder
  }

  export type InstanceMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    hash?: SortOrder
    address?: SortOrder
    instancePolicyId?: SortOrder
    createdAt?: SortOrder
  }

  export type InstanceMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    hash?: SortOrder
    address?: SortOrder
    instancePolicyId?: SortOrder
    createdAt?: SortOrder
  }

  export type InstanceSumOrderByAggregateInput = {
    id?: SortOrder
    instancePolicyId?: SortOrder
  }

  export type EnumScriptCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ScriptCategory | EnumScriptCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.ScriptCategory[] | ListEnumScriptCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.ScriptCategory[] | ListEnumScriptCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumScriptCategoryWithAggregatesFilter<$PrismaModel> | $Enums.ScriptCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumScriptCategoryFilter<$PrismaModel>
    _max?: NestedEnumScriptCategoryFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ProjectDetailsCountOrderByAggregateInput = {
    id?: SortOrder
    projectNftPolicy?: SortOrder
    TreasuryTokenPolicy?: SortOrder
    TreasuryAddress?: SortOrder
    ContributorStateAddress?: SortOrder
    EscrowAddress?: SortOrder
    createdAt?: SortOrder
  }

  export type ProjectDetailsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ProjectDetailsMaxOrderByAggregateInput = {
    id?: SortOrder
    projectNftPolicy?: SortOrder
    TreasuryTokenPolicy?: SortOrder
    TreasuryAddress?: SortOrder
    ContributorStateAddress?: SortOrder
    EscrowAddress?: SortOrder
    createdAt?: SortOrder
  }

  export type ProjectDetailsMinOrderByAggregateInput = {
    id?: SortOrder
    projectNftPolicy?: SortOrder
    TreasuryTokenPolicy?: SortOrder
    TreasuryAddress?: SortOrder
    ContributorStateAddress?: SortOrder
    EscrowAddress?: SortOrder
    createdAt?: SortOrder
  }

  export type ProjectDetailsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type LocalStateTxCborCountOrderByAggregateInput = {
    id?: SortOrder
    txHash?: SortOrder
    cbor?: SortOrder
    localStatePolicy?: SortOrder
    validator?: SortOrder
    createdAt?: SortOrder
  }

  export type LocalStateTxCborAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type LocalStateTxCborMaxOrderByAggregateInput = {
    id?: SortOrder
    txHash?: SortOrder
    cbor?: SortOrder
    localStatePolicy?: SortOrder
    validator?: SortOrder
    createdAt?: SortOrder
  }

  export type LocalStateTxCborMinOrderByAggregateInput = {
    id?: SortOrder
    txHash?: SortOrder
    cbor?: SortOrder
    localStatePolicy?: SortOrder
    validator?: SortOrder
    createdAt?: SortOrder
  }

  export type LocalStateTxCborSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type LocalStateTxOutputCountOrderByAggregateInput = {
    id?: SortOrder
    utxoId?: SortOrder
    localStatePolicy?: SortOrder
    validator?: SortOrder
    createdAt?: SortOrder
  }

  export type LocalStateTxOutputAvgOrderByAggregateInput = {
    id?: SortOrder
    utxoId?: SortOrder
  }

  export type LocalStateTxOutputMaxOrderByAggregateInput = {
    id?: SortOrder
    utxoId?: SortOrder
    localStatePolicy?: SortOrder
    validator?: SortOrder
    createdAt?: SortOrder
  }

  export type LocalStateTxOutputMinOrderByAggregateInput = {
    id?: SortOrder
    utxoId?: SortOrder
    localStatePolicy?: SortOrder
    validator?: SortOrder
    createdAt?: SortOrder
  }

  export type LocalStateTxOutputSumOrderByAggregateInput = {
    id?: SortOrder
    utxoId?: SortOrder
  }

  export type TransactionSyncTipCountOrderByAggregateInput = {
    id?: SortOrder
    slot?: SortOrder
    blockHash?: SortOrder
  }

  export type TransactionSyncTipAvgOrderByAggregateInput = {
    id?: SortOrder
    slot?: SortOrder
  }

  export type TransactionSyncTipMaxOrderByAggregateInput = {
    id?: SortOrder
    slot?: SortOrder
    blockHash?: SortOrder
  }

  export type TransactionSyncTipMinOrderByAggregateInput = {
    id?: SortOrder
    slot?: SortOrder
    blockHash?: SortOrder
  }

  export type TransactionSyncTipSumOrderByAggregateInput = {
    id?: SortOrder
    slot?: SortOrder
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type MultiAssetListRelationFilter = {
    every?: MultiAssetWhereInput
    some?: MultiAssetWhereInput
    none?: MultiAssetWhereInput
  }

  export type NetworkTxOutputListRelationFilter = {
    every?: NetworkTxOutputWhereInput
    some?: NetworkTxOutputWhereInput
    none?: NetworkTxOutputWhereInput
  }

  export type LocalStateTxOutputListRelationFilter = {
    every?: LocalStateTxOutputWhereInput
    some?: LocalStateTxOutputWhereInput
    none?: LocalStateTxOutputWhereInput
  }

  export type MultiAssetOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NetworkTxOutputOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LocalStateTxOutputOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UtxoTxHashIndexCompoundUniqueInput = {
    txHash: string
    index: number
  }

  export type UtxoCountOrderByAggregateInput = {
    id?: SortOrder
    txHash?: SortOrder
    index?: SortOrder
    address?: SortOrder
    plutusData?: SortOrder
    scriptRef?: SortOrder
    coin?: SortOrder
  }

  export type UtxoAvgOrderByAggregateInput = {
    id?: SortOrder
    index?: SortOrder
    coin?: SortOrder
  }

  export type UtxoMaxOrderByAggregateInput = {
    id?: SortOrder
    txHash?: SortOrder
    index?: SortOrder
    address?: SortOrder
    plutusData?: SortOrder
    scriptRef?: SortOrder
    coin?: SortOrder
  }

  export type UtxoMinOrderByAggregateInput = {
    id?: SortOrder
    txHash?: SortOrder
    index?: SortOrder
    address?: SortOrder
    plutusData?: SortOrder
    scriptRef?: SortOrder
    coin?: SortOrder
  }

  export type UtxoSumOrderByAggregateInput = {
    id?: SortOrder
    index?: SortOrder
    coin?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
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

  export type UtxoNullableScalarRelationFilter = {
    is?: UtxoWhereInput | null
    isNot?: UtxoWhereInput | null
  }

  export type MultiAssetCountOrderByAggregateInput = {
    id?: SortOrder
    policyId?: SortOrder
    assetName?: SortOrder
    quantity?: SortOrder
    utxoId?: SortOrder
  }

  export type MultiAssetAvgOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    utxoId?: SortOrder
  }

  export type MultiAssetMaxOrderByAggregateInput = {
    id?: SortOrder
    policyId?: SortOrder
    assetName?: SortOrder
    quantity?: SortOrder
    utxoId?: SortOrder
  }

  export type MultiAssetMinOrderByAggregateInput = {
    id?: SortOrder
    policyId?: SortOrder
    assetName?: SortOrder
    quantity?: SortOrder
    utxoId?: SortOrder
  }

  export type MultiAssetSumOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    utxoId?: SortOrder
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

  export type InstanceListRelationFilter = {
    every?: InstanceWhereInput
    some?: InstanceWhereInput
    none?: InstanceWhereInput
  }

  export type InstanceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InstancePolicyCountOrderByAggregateInput = {
    id?: SortOrder
    policyId?: SortOrder
    createdAt?: SortOrder
  }

  export type InstancePolicyAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type InstancePolicyMaxOrderByAggregateInput = {
    id?: SortOrder
    policyId?: SortOrder
    createdAt?: SortOrder
  }

  export type InstancePolicyMinOrderByAggregateInput = {
    id?: SortOrder
    policyId?: SortOrder
    createdAt?: SortOrder
  }

  export type InstancePolicySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumNetworkValidatorFieldUpdateOperationsInput = {
    set?: $Enums.NetworkValidator
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UtxoCreateNestedOneWithoutNetworkTxOutputInput = {
    create?: XOR<UtxoCreateWithoutNetworkTxOutputInput, UtxoUncheckedCreateWithoutNetworkTxOutputInput>
    connectOrCreate?: UtxoCreateOrConnectWithoutNetworkTxOutputInput
    connect?: UtxoWhereUniqueInput
  }

  export type UtxoUpdateOneRequiredWithoutNetworkTxOutputNestedInput = {
    create?: XOR<UtxoCreateWithoutNetworkTxOutputInput, UtxoUncheckedCreateWithoutNetworkTxOutputInput>
    connectOrCreate?: UtxoCreateOrConnectWithoutNetworkTxOutputInput
    upsert?: UtxoUpsertWithoutNetworkTxOutputInput
    connect?: UtxoWhereUniqueInput
    update?: XOR<XOR<UtxoUpdateToOneWithWhereWithoutNetworkTxOutputInput, UtxoUpdateWithoutNetworkTxOutputInput>, UtxoUncheckedUpdateWithoutNetworkTxOutputInput>
  }

  export type InstancePolicyCreateNestedOneWithoutInstanceInput = {
    create?: XOR<InstancePolicyCreateWithoutInstanceInput, InstancePolicyUncheckedCreateWithoutInstanceInput>
    connectOrCreate?: InstancePolicyCreateOrConnectWithoutInstanceInput
    connect?: InstancePolicyWhereUniqueInput
  }

  export type EnumScriptCategoryFieldUpdateOperationsInput = {
    set?: $Enums.ScriptCategory
  }

  export type InstancePolicyUpdateOneRequiredWithoutInstanceNestedInput = {
    create?: XOR<InstancePolicyCreateWithoutInstanceInput, InstancePolicyUncheckedCreateWithoutInstanceInput>
    connectOrCreate?: InstancePolicyCreateOrConnectWithoutInstanceInput
    upsert?: InstancePolicyUpsertWithoutInstanceInput
    connect?: InstancePolicyWhereUniqueInput
    update?: XOR<XOR<InstancePolicyUpdateToOneWithWhereWithoutInstanceInput, InstancePolicyUpdateWithoutInstanceInput>, InstancePolicyUncheckedUpdateWithoutInstanceInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UtxoCreateNestedOneWithoutLocalStateTxOutputInput = {
    create?: XOR<UtxoCreateWithoutLocalStateTxOutputInput, UtxoUncheckedCreateWithoutLocalStateTxOutputInput>
    connectOrCreate?: UtxoCreateOrConnectWithoutLocalStateTxOutputInput
    connect?: UtxoWhereUniqueInput
  }

  export type UtxoUpdateOneRequiredWithoutLocalStateTxOutputNestedInput = {
    create?: XOR<UtxoCreateWithoutLocalStateTxOutputInput, UtxoUncheckedCreateWithoutLocalStateTxOutputInput>
    connectOrCreate?: UtxoCreateOrConnectWithoutLocalStateTxOutputInput
    upsert?: UtxoUpsertWithoutLocalStateTxOutputInput
    connect?: UtxoWhereUniqueInput
    update?: XOR<XOR<UtxoUpdateToOneWithWhereWithoutLocalStateTxOutputInput, UtxoUpdateWithoutLocalStateTxOutputInput>, UtxoUncheckedUpdateWithoutLocalStateTxOutputInput>
  }

  export type MultiAssetCreateNestedManyWithoutUtxoInput = {
    create?: XOR<MultiAssetCreateWithoutUtxoInput, MultiAssetUncheckedCreateWithoutUtxoInput> | MultiAssetCreateWithoutUtxoInput[] | MultiAssetUncheckedCreateWithoutUtxoInput[]
    connectOrCreate?: MultiAssetCreateOrConnectWithoutUtxoInput | MultiAssetCreateOrConnectWithoutUtxoInput[]
    createMany?: MultiAssetCreateManyUtxoInputEnvelope
    connect?: MultiAssetWhereUniqueInput | MultiAssetWhereUniqueInput[]
  }

  export type NetworkTxOutputCreateNestedManyWithoutUtxoInput = {
    create?: XOR<NetworkTxOutputCreateWithoutUtxoInput, NetworkTxOutputUncheckedCreateWithoutUtxoInput> | NetworkTxOutputCreateWithoutUtxoInput[] | NetworkTxOutputUncheckedCreateWithoutUtxoInput[]
    connectOrCreate?: NetworkTxOutputCreateOrConnectWithoutUtxoInput | NetworkTxOutputCreateOrConnectWithoutUtxoInput[]
    createMany?: NetworkTxOutputCreateManyUtxoInputEnvelope
    connect?: NetworkTxOutputWhereUniqueInput | NetworkTxOutputWhereUniqueInput[]
  }

  export type LocalStateTxOutputCreateNestedManyWithoutUtxoInput = {
    create?: XOR<LocalStateTxOutputCreateWithoutUtxoInput, LocalStateTxOutputUncheckedCreateWithoutUtxoInput> | LocalStateTxOutputCreateWithoutUtxoInput[] | LocalStateTxOutputUncheckedCreateWithoutUtxoInput[]
    connectOrCreate?: LocalStateTxOutputCreateOrConnectWithoutUtxoInput | LocalStateTxOutputCreateOrConnectWithoutUtxoInput[]
    createMany?: LocalStateTxOutputCreateManyUtxoInputEnvelope
    connect?: LocalStateTxOutputWhereUniqueInput | LocalStateTxOutputWhereUniqueInput[]
  }

  export type MultiAssetUncheckedCreateNestedManyWithoutUtxoInput = {
    create?: XOR<MultiAssetCreateWithoutUtxoInput, MultiAssetUncheckedCreateWithoutUtxoInput> | MultiAssetCreateWithoutUtxoInput[] | MultiAssetUncheckedCreateWithoutUtxoInput[]
    connectOrCreate?: MultiAssetCreateOrConnectWithoutUtxoInput | MultiAssetCreateOrConnectWithoutUtxoInput[]
    createMany?: MultiAssetCreateManyUtxoInputEnvelope
    connect?: MultiAssetWhereUniqueInput | MultiAssetWhereUniqueInput[]
  }

  export type NetworkTxOutputUncheckedCreateNestedManyWithoutUtxoInput = {
    create?: XOR<NetworkTxOutputCreateWithoutUtxoInput, NetworkTxOutputUncheckedCreateWithoutUtxoInput> | NetworkTxOutputCreateWithoutUtxoInput[] | NetworkTxOutputUncheckedCreateWithoutUtxoInput[]
    connectOrCreate?: NetworkTxOutputCreateOrConnectWithoutUtxoInput | NetworkTxOutputCreateOrConnectWithoutUtxoInput[]
    createMany?: NetworkTxOutputCreateManyUtxoInputEnvelope
    connect?: NetworkTxOutputWhereUniqueInput | NetworkTxOutputWhereUniqueInput[]
  }

  export type LocalStateTxOutputUncheckedCreateNestedManyWithoutUtxoInput = {
    create?: XOR<LocalStateTxOutputCreateWithoutUtxoInput, LocalStateTxOutputUncheckedCreateWithoutUtxoInput> | LocalStateTxOutputCreateWithoutUtxoInput[] | LocalStateTxOutputUncheckedCreateWithoutUtxoInput[]
    connectOrCreate?: LocalStateTxOutputCreateOrConnectWithoutUtxoInput | LocalStateTxOutputCreateOrConnectWithoutUtxoInput[]
    createMany?: LocalStateTxOutputCreateManyUtxoInputEnvelope
    connect?: LocalStateTxOutputWhereUniqueInput | LocalStateTxOutputWhereUniqueInput[]
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type MultiAssetUpdateManyWithoutUtxoNestedInput = {
    create?: XOR<MultiAssetCreateWithoutUtxoInput, MultiAssetUncheckedCreateWithoutUtxoInput> | MultiAssetCreateWithoutUtxoInput[] | MultiAssetUncheckedCreateWithoutUtxoInput[]
    connectOrCreate?: MultiAssetCreateOrConnectWithoutUtxoInput | MultiAssetCreateOrConnectWithoutUtxoInput[]
    upsert?: MultiAssetUpsertWithWhereUniqueWithoutUtxoInput | MultiAssetUpsertWithWhereUniqueWithoutUtxoInput[]
    createMany?: MultiAssetCreateManyUtxoInputEnvelope
    set?: MultiAssetWhereUniqueInput | MultiAssetWhereUniqueInput[]
    disconnect?: MultiAssetWhereUniqueInput | MultiAssetWhereUniqueInput[]
    delete?: MultiAssetWhereUniqueInput | MultiAssetWhereUniqueInput[]
    connect?: MultiAssetWhereUniqueInput | MultiAssetWhereUniqueInput[]
    update?: MultiAssetUpdateWithWhereUniqueWithoutUtxoInput | MultiAssetUpdateWithWhereUniqueWithoutUtxoInput[]
    updateMany?: MultiAssetUpdateManyWithWhereWithoutUtxoInput | MultiAssetUpdateManyWithWhereWithoutUtxoInput[]
    deleteMany?: MultiAssetScalarWhereInput | MultiAssetScalarWhereInput[]
  }

  export type NetworkTxOutputUpdateManyWithoutUtxoNestedInput = {
    create?: XOR<NetworkTxOutputCreateWithoutUtxoInput, NetworkTxOutputUncheckedCreateWithoutUtxoInput> | NetworkTxOutputCreateWithoutUtxoInput[] | NetworkTxOutputUncheckedCreateWithoutUtxoInput[]
    connectOrCreate?: NetworkTxOutputCreateOrConnectWithoutUtxoInput | NetworkTxOutputCreateOrConnectWithoutUtxoInput[]
    upsert?: NetworkTxOutputUpsertWithWhereUniqueWithoutUtxoInput | NetworkTxOutputUpsertWithWhereUniqueWithoutUtxoInput[]
    createMany?: NetworkTxOutputCreateManyUtxoInputEnvelope
    set?: NetworkTxOutputWhereUniqueInput | NetworkTxOutputWhereUniqueInput[]
    disconnect?: NetworkTxOutputWhereUniqueInput | NetworkTxOutputWhereUniqueInput[]
    delete?: NetworkTxOutputWhereUniqueInput | NetworkTxOutputWhereUniqueInput[]
    connect?: NetworkTxOutputWhereUniqueInput | NetworkTxOutputWhereUniqueInput[]
    update?: NetworkTxOutputUpdateWithWhereUniqueWithoutUtxoInput | NetworkTxOutputUpdateWithWhereUniqueWithoutUtxoInput[]
    updateMany?: NetworkTxOutputUpdateManyWithWhereWithoutUtxoInput | NetworkTxOutputUpdateManyWithWhereWithoutUtxoInput[]
    deleteMany?: NetworkTxOutputScalarWhereInput | NetworkTxOutputScalarWhereInput[]
  }

  export type LocalStateTxOutputUpdateManyWithoutUtxoNestedInput = {
    create?: XOR<LocalStateTxOutputCreateWithoutUtxoInput, LocalStateTxOutputUncheckedCreateWithoutUtxoInput> | LocalStateTxOutputCreateWithoutUtxoInput[] | LocalStateTxOutputUncheckedCreateWithoutUtxoInput[]
    connectOrCreate?: LocalStateTxOutputCreateOrConnectWithoutUtxoInput | LocalStateTxOutputCreateOrConnectWithoutUtxoInput[]
    upsert?: LocalStateTxOutputUpsertWithWhereUniqueWithoutUtxoInput | LocalStateTxOutputUpsertWithWhereUniqueWithoutUtxoInput[]
    createMany?: LocalStateTxOutputCreateManyUtxoInputEnvelope
    set?: LocalStateTxOutputWhereUniqueInput | LocalStateTxOutputWhereUniqueInput[]
    disconnect?: LocalStateTxOutputWhereUniqueInput | LocalStateTxOutputWhereUniqueInput[]
    delete?: LocalStateTxOutputWhereUniqueInput | LocalStateTxOutputWhereUniqueInput[]
    connect?: LocalStateTxOutputWhereUniqueInput | LocalStateTxOutputWhereUniqueInput[]
    update?: LocalStateTxOutputUpdateWithWhereUniqueWithoutUtxoInput | LocalStateTxOutputUpdateWithWhereUniqueWithoutUtxoInput[]
    updateMany?: LocalStateTxOutputUpdateManyWithWhereWithoutUtxoInput | LocalStateTxOutputUpdateManyWithWhereWithoutUtxoInput[]
    deleteMany?: LocalStateTxOutputScalarWhereInput | LocalStateTxOutputScalarWhereInput[]
  }

  export type MultiAssetUncheckedUpdateManyWithoutUtxoNestedInput = {
    create?: XOR<MultiAssetCreateWithoutUtxoInput, MultiAssetUncheckedCreateWithoutUtxoInput> | MultiAssetCreateWithoutUtxoInput[] | MultiAssetUncheckedCreateWithoutUtxoInput[]
    connectOrCreate?: MultiAssetCreateOrConnectWithoutUtxoInput | MultiAssetCreateOrConnectWithoutUtxoInput[]
    upsert?: MultiAssetUpsertWithWhereUniqueWithoutUtxoInput | MultiAssetUpsertWithWhereUniqueWithoutUtxoInput[]
    createMany?: MultiAssetCreateManyUtxoInputEnvelope
    set?: MultiAssetWhereUniqueInput | MultiAssetWhereUniqueInput[]
    disconnect?: MultiAssetWhereUniqueInput | MultiAssetWhereUniqueInput[]
    delete?: MultiAssetWhereUniqueInput | MultiAssetWhereUniqueInput[]
    connect?: MultiAssetWhereUniqueInput | MultiAssetWhereUniqueInput[]
    update?: MultiAssetUpdateWithWhereUniqueWithoutUtxoInput | MultiAssetUpdateWithWhereUniqueWithoutUtxoInput[]
    updateMany?: MultiAssetUpdateManyWithWhereWithoutUtxoInput | MultiAssetUpdateManyWithWhereWithoutUtxoInput[]
    deleteMany?: MultiAssetScalarWhereInput | MultiAssetScalarWhereInput[]
  }

  export type NetworkTxOutputUncheckedUpdateManyWithoutUtxoNestedInput = {
    create?: XOR<NetworkTxOutputCreateWithoutUtxoInput, NetworkTxOutputUncheckedCreateWithoutUtxoInput> | NetworkTxOutputCreateWithoutUtxoInput[] | NetworkTxOutputUncheckedCreateWithoutUtxoInput[]
    connectOrCreate?: NetworkTxOutputCreateOrConnectWithoutUtxoInput | NetworkTxOutputCreateOrConnectWithoutUtxoInput[]
    upsert?: NetworkTxOutputUpsertWithWhereUniqueWithoutUtxoInput | NetworkTxOutputUpsertWithWhereUniqueWithoutUtxoInput[]
    createMany?: NetworkTxOutputCreateManyUtxoInputEnvelope
    set?: NetworkTxOutputWhereUniqueInput | NetworkTxOutputWhereUniqueInput[]
    disconnect?: NetworkTxOutputWhereUniqueInput | NetworkTxOutputWhereUniqueInput[]
    delete?: NetworkTxOutputWhereUniqueInput | NetworkTxOutputWhereUniqueInput[]
    connect?: NetworkTxOutputWhereUniqueInput | NetworkTxOutputWhereUniqueInput[]
    update?: NetworkTxOutputUpdateWithWhereUniqueWithoutUtxoInput | NetworkTxOutputUpdateWithWhereUniqueWithoutUtxoInput[]
    updateMany?: NetworkTxOutputUpdateManyWithWhereWithoutUtxoInput | NetworkTxOutputUpdateManyWithWhereWithoutUtxoInput[]
    deleteMany?: NetworkTxOutputScalarWhereInput | NetworkTxOutputScalarWhereInput[]
  }

  export type LocalStateTxOutputUncheckedUpdateManyWithoutUtxoNestedInput = {
    create?: XOR<LocalStateTxOutputCreateWithoutUtxoInput, LocalStateTxOutputUncheckedCreateWithoutUtxoInput> | LocalStateTxOutputCreateWithoutUtxoInput[] | LocalStateTxOutputUncheckedCreateWithoutUtxoInput[]
    connectOrCreate?: LocalStateTxOutputCreateOrConnectWithoutUtxoInput | LocalStateTxOutputCreateOrConnectWithoutUtxoInput[]
    upsert?: LocalStateTxOutputUpsertWithWhereUniqueWithoutUtxoInput | LocalStateTxOutputUpsertWithWhereUniqueWithoutUtxoInput[]
    createMany?: LocalStateTxOutputCreateManyUtxoInputEnvelope
    set?: LocalStateTxOutputWhereUniqueInput | LocalStateTxOutputWhereUniqueInput[]
    disconnect?: LocalStateTxOutputWhereUniqueInput | LocalStateTxOutputWhereUniqueInput[]
    delete?: LocalStateTxOutputWhereUniqueInput | LocalStateTxOutputWhereUniqueInput[]
    connect?: LocalStateTxOutputWhereUniqueInput | LocalStateTxOutputWhereUniqueInput[]
    update?: LocalStateTxOutputUpdateWithWhereUniqueWithoutUtxoInput | LocalStateTxOutputUpdateWithWhereUniqueWithoutUtxoInput[]
    updateMany?: LocalStateTxOutputUpdateManyWithWhereWithoutUtxoInput | LocalStateTxOutputUpdateManyWithWhereWithoutUtxoInput[]
    deleteMany?: LocalStateTxOutputScalarWhereInput | LocalStateTxOutputScalarWhereInput[]
  }

  export type UtxoCreateNestedOneWithoutMultiAssetInput = {
    create?: XOR<UtxoCreateWithoutMultiAssetInput, UtxoUncheckedCreateWithoutMultiAssetInput>
    connectOrCreate?: UtxoCreateOrConnectWithoutMultiAssetInput
    connect?: UtxoWhereUniqueInput
  }

  export type UtxoUpdateOneWithoutMultiAssetNestedInput = {
    create?: XOR<UtxoCreateWithoutMultiAssetInput, UtxoUncheckedCreateWithoutMultiAssetInput>
    connectOrCreate?: UtxoCreateOrConnectWithoutMultiAssetInput
    upsert?: UtxoUpsertWithoutMultiAssetInput
    disconnect?: UtxoWhereInput | boolean
    delete?: UtxoWhereInput | boolean
    connect?: UtxoWhereUniqueInput
    update?: XOR<XOR<UtxoUpdateToOneWithWhereWithoutMultiAssetInput, UtxoUpdateWithoutMultiAssetInput>, UtxoUncheckedUpdateWithoutMultiAssetInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type InstanceCreateNestedManyWithoutInstancePolicyInput = {
    create?: XOR<InstanceCreateWithoutInstancePolicyInput, InstanceUncheckedCreateWithoutInstancePolicyInput> | InstanceCreateWithoutInstancePolicyInput[] | InstanceUncheckedCreateWithoutInstancePolicyInput[]
    connectOrCreate?: InstanceCreateOrConnectWithoutInstancePolicyInput | InstanceCreateOrConnectWithoutInstancePolicyInput[]
    createMany?: InstanceCreateManyInstancePolicyInputEnvelope
    connect?: InstanceWhereUniqueInput | InstanceWhereUniqueInput[]
  }

  export type InstanceUncheckedCreateNestedManyWithoutInstancePolicyInput = {
    create?: XOR<InstanceCreateWithoutInstancePolicyInput, InstanceUncheckedCreateWithoutInstancePolicyInput> | InstanceCreateWithoutInstancePolicyInput[] | InstanceUncheckedCreateWithoutInstancePolicyInput[]
    connectOrCreate?: InstanceCreateOrConnectWithoutInstancePolicyInput | InstanceCreateOrConnectWithoutInstancePolicyInput[]
    createMany?: InstanceCreateManyInstancePolicyInputEnvelope
    connect?: InstanceWhereUniqueInput | InstanceWhereUniqueInput[]
  }

  export type InstanceUpdateManyWithoutInstancePolicyNestedInput = {
    create?: XOR<InstanceCreateWithoutInstancePolicyInput, InstanceUncheckedCreateWithoutInstancePolicyInput> | InstanceCreateWithoutInstancePolicyInput[] | InstanceUncheckedCreateWithoutInstancePolicyInput[]
    connectOrCreate?: InstanceCreateOrConnectWithoutInstancePolicyInput | InstanceCreateOrConnectWithoutInstancePolicyInput[]
    upsert?: InstanceUpsertWithWhereUniqueWithoutInstancePolicyInput | InstanceUpsertWithWhereUniqueWithoutInstancePolicyInput[]
    createMany?: InstanceCreateManyInstancePolicyInputEnvelope
    set?: InstanceWhereUniqueInput | InstanceWhereUniqueInput[]
    disconnect?: InstanceWhereUniqueInput | InstanceWhereUniqueInput[]
    delete?: InstanceWhereUniqueInput | InstanceWhereUniqueInput[]
    connect?: InstanceWhereUniqueInput | InstanceWhereUniqueInput[]
    update?: InstanceUpdateWithWhereUniqueWithoutInstancePolicyInput | InstanceUpdateWithWhereUniqueWithoutInstancePolicyInput[]
    updateMany?: InstanceUpdateManyWithWhereWithoutInstancePolicyInput | InstanceUpdateManyWithWhereWithoutInstancePolicyInput[]
    deleteMany?: InstanceScalarWhereInput | InstanceScalarWhereInput[]
  }

  export type InstanceUncheckedUpdateManyWithoutInstancePolicyNestedInput = {
    create?: XOR<InstanceCreateWithoutInstancePolicyInput, InstanceUncheckedCreateWithoutInstancePolicyInput> | InstanceCreateWithoutInstancePolicyInput[] | InstanceUncheckedCreateWithoutInstancePolicyInput[]
    connectOrCreate?: InstanceCreateOrConnectWithoutInstancePolicyInput | InstanceCreateOrConnectWithoutInstancePolicyInput[]
    upsert?: InstanceUpsertWithWhereUniqueWithoutInstancePolicyInput | InstanceUpsertWithWhereUniqueWithoutInstancePolicyInput[]
    createMany?: InstanceCreateManyInstancePolicyInputEnvelope
    set?: InstanceWhereUniqueInput | InstanceWhereUniqueInput[]
    disconnect?: InstanceWhereUniqueInput | InstanceWhereUniqueInput[]
    delete?: InstanceWhereUniqueInput | InstanceWhereUniqueInput[]
    connect?: InstanceWhereUniqueInput | InstanceWhereUniqueInput[]
    update?: InstanceUpdateWithWhereUniqueWithoutInstancePolicyInput | InstanceUpdateWithWhereUniqueWithoutInstancePolicyInput[]
    updateMany?: InstanceUpdateManyWithWhereWithoutInstancePolicyInput | InstanceUpdateManyWithWhereWithoutInstancePolicyInput[]
    deleteMany?: InstanceScalarWhereInput | InstanceScalarWhereInput[]
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

  export type NestedEnumNetworkValidatorFilter<$PrismaModel = never> = {
    equals?: $Enums.NetworkValidator | EnumNetworkValidatorFieldRefInput<$PrismaModel>
    in?: $Enums.NetworkValidator[] | ListEnumNetworkValidatorFieldRefInput<$PrismaModel>
    notIn?: $Enums.NetworkValidator[] | ListEnumNetworkValidatorFieldRefInput<$PrismaModel>
    not?: NestedEnumNetworkValidatorFilter<$PrismaModel> | $Enums.NetworkValidator
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

  export type NestedEnumNetworkValidatorWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NetworkValidator | EnumNetworkValidatorFieldRefInput<$PrismaModel>
    in?: $Enums.NetworkValidator[] | ListEnumNetworkValidatorFieldRefInput<$PrismaModel>
    notIn?: $Enums.NetworkValidator[] | ListEnumNetworkValidatorFieldRefInput<$PrismaModel>
    not?: NestedEnumNetworkValidatorWithAggregatesFilter<$PrismaModel> | $Enums.NetworkValidator
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumNetworkValidatorFilter<$PrismaModel>
    _max?: NestedEnumNetworkValidatorFilter<$PrismaModel>
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

  export type NestedEnumScriptCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.ScriptCategory | EnumScriptCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.ScriptCategory[] | ListEnumScriptCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.ScriptCategory[] | ListEnumScriptCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumScriptCategoryFilter<$PrismaModel> | $Enums.ScriptCategory
  }

  export type NestedEnumScriptCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ScriptCategory | EnumScriptCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.ScriptCategory[] | ListEnumScriptCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.ScriptCategory[] | ListEnumScriptCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumScriptCategoryWithAggregatesFilter<$PrismaModel> | $Enums.ScriptCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumScriptCategoryFilter<$PrismaModel>
    _max?: NestedEnumScriptCategoryFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
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

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
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

  export type UtxoCreateWithoutNetworkTxOutputInput = {
    txHash: string
    index: number
    address: string
    plutusData?: string | null
    scriptRef?: string | null
    coin: bigint | number
    MultiAsset?: MultiAssetCreateNestedManyWithoutUtxoInput
    LocalStateTxOutput?: LocalStateTxOutputCreateNestedManyWithoutUtxoInput
  }

  export type UtxoUncheckedCreateWithoutNetworkTxOutputInput = {
    id?: number
    txHash: string
    index: number
    address: string
    plutusData?: string | null
    scriptRef?: string | null
    coin: bigint | number
    MultiAsset?: MultiAssetUncheckedCreateNestedManyWithoutUtxoInput
    LocalStateTxOutput?: LocalStateTxOutputUncheckedCreateNestedManyWithoutUtxoInput
  }

  export type UtxoCreateOrConnectWithoutNetworkTxOutputInput = {
    where: UtxoWhereUniqueInput
    create: XOR<UtxoCreateWithoutNetworkTxOutputInput, UtxoUncheckedCreateWithoutNetworkTxOutputInput>
  }

  export type UtxoUpsertWithoutNetworkTxOutputInput = {
    update: XOR<UtxoUpdateWithoutNetworkTxOutputInput, UtxoUncheckedUpdateWithoutNetworkTxOutputInput>
    create: XOR<UtxoCreateWithoutNetworkTxOutputInput, UtxoUncheckedCreateWithoutNetworkTxOutputInput>
    where?: UtxoWhereInput
  }

  export type UtxoUpdateToOneWithWhereWithoutNetworkTxOutputInput = {
    where?: UtxoWhereInput
    data: XOR<UtxoUpdateWithoutNetworkTxOutputInput, UtxoUncheckedUpdateWithoutNetworkTxOutputInput>
  }

  export type UtxoUpdateWithoutNetworkTxOutputInput = {
    txHash?: StringFieldUpdateOperationsInput | string
    index?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    plutusData?: NullableStringFieldUpdateOperationsInput | string | null
    scriptRef?: NullableStringFieldUpdateOperationsInput | string | null
    coin?: BigIntFieldUpdateOperationsInput | bigint | number
    MultiAsset?: MultiAssetUpdateManyWithoutUtxoNestedInput
    LocalStateTxOutput?: LocalStateTxOutputUpdateManyWithoutUtxoNestedInput
  }

  export type UtxoUncheckedUpdateWithoutNetworkTxOutputInput = {
    id?: IntFieldUpdateOperationsInput | number
    txHash?: StringFieldUpdateOperationsInput | string
    index?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    plutusData?: NullableStringFieldUpdateOperationsInput | string | null
    scriptRef?: NullableStringFieldUpdateOperationsInput | string | null
    coin?: BigIntFieldUpdateOperationsInput | bigint | number
    MultiAsset?: MultiAssetUncheckedUpdateManyWithoutUtxoNestedInput
    LocalStateTxOutput?: LocalStateTxOutputUncheckedUpdateManyWithoutUtxoNestedInput
  }

  export type InstancePolicyCreateWithoutInstanceInput = {
    policyId: string
    createdAt?: Date | string
  }

  export type InstancePolicyUncheckedCreateWithoutInstanceInput = {
    id?: number
    policyId: string
    createdAt?: Date | string
  }

  export type InstancePolicyCreateOrConnectWithoutInstanceInput = {
    where: InstancePolicyWhereUniqueInput
    create: XOR<InstancePolicyCreateWithoutInstanceInput, InstancePolicyUncheckedCreateWithoutInstanceInput>
  }

  export type InstancePolicyUpsertWithoutInstanceInput = {
    update: XOR<InstancePolicyUpdateWithoutInstanceInput, InstancePolicyUncheckedUpdateWithoutInstanceInput>
    create: XOR<InstancePolicyCreateWithoutInstanceInput, InstancePolicyUncheckedCreateWithoutInstanceInput>
    where?: InstancePolicyWhereInput
  }

  export type InstancePolicyUpdateToOneWithWhereWithoutInstanceInput = {
    where?: InstancePolicyWhereInput
    data: XOR<InstancePolicyUpdateWithoutInstanceInput, InstancePolicyUncheckedUpdateWithoutInstanceInput>
  }

  export type InstancePolicyUpdateWithoutInstanceInput = {
    policyId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InstancePolicyUncheckedUpdateWithoutInstanceInput = {
    id?: IntFieldUpdateOperationsInput | number
    policyId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UtxoCreateWithoutLocalStateTxOutputInput = {
    txHash: string
    index: number
    address: string
    plutusData?: string | null
    scriptRef?: string | null
    coin: bigint | number
    MultiAsset?: MultiAssetCreateNestedManyWithoutUtxoInput
    NetworkTxOutput?: NetworkTxOutputCreateNestedManyWithoutUtxoInput
  }

  export type UtxoUncheckedCreateWithoutLocalStateTxOutputInput = {
    id?: number
    txHash: string
    index: number
    address: string
    plutusData?: string | null
    scriptRef?: string | null
    coin: bigint | number
    MultiAsset?: MultiAssetUncheckedCreateNestedManyWithoutUtxoInput
    NetworkTxOutput?: NetworkTxOutputUncheckedCreateNestedManyWithoutUtxoInput
  }

  export type UtxoCreateOrConnectWithoutLocalStateTxOutputInput = {
    where: UtxoWhereUniqueInput
    create: XOR<UtxoCreateWithoutLocalStateTxOutputInput, UtxoUncheckedCreateWithoutLocalStateTxOutputInput>
  }

  export type UtxoUpsertWithoutLocalStateTxOutputInput = {
    update: XOR<UtxoUpdateWithoutLocalStateTxOutputInput, UtxoUncheckedUpdateWithoutLocalStateTxOutputInput>
    create: XOR<UtxoCreateWithoutLocalStateTxOutputInput, UtxoUncheckedCreateWithoutLocalStateTxOutputInput>
    where?: UtxoWhereInput
  }

  export type UtxoUpdateToOneWithWhereWithoutLocalStateTxOutputInput = {
    where?: UtxoWhereInput
    data: XOR<UtxoUpdateWithoutLocalStateTxOutputInput, UtxoUncheckedUpdateWithoutLocalStateTxOutputInput>
  }

  export type UtxoUpdateWithoutLocalStateTxOutputInput = {
    txHash?: StringFieldUpdateOperationsInput | string
    index?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    plutusData?: NullableStringFieldUpdateOperationsInput | string | null
    scriptRef?: NullableStringFieldUpdateOperationsInput | string | null
    coin?: BigIntFieldUpdateOperationsInput | bigint | number
    MultiAsset?: MultiAssetUpdateManyWithoutUtxoNestedInput
    NetworkTxOutput?: NetworkTxOutputUpdateManyWithoutUtxoNestedInput
  }

  export type UtxoUncheckedUpdateWithoutLocalStateTxOutputInput = {
    id?: IntFieldUpdateOperationsInput | number
    txHash?: StringFieldUpdateOperationsInput | string
    index?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    plutusData?: NullableStringFieldUpdateOperationsInput | string | null
    scriptRef?: NullableStringFieldUpdateOperationsInput | string | null
    coin?: BigIntFieldUpdateOperationsInput | bigint | number
    MultiAsset?: MultiAssetUncheckedUpdateManyWithoutUtxoNestedInput
    NetworkTxOutput?: NetworkTxOutputUncheckedUpdateManyWithoutUtxoNestedInput
  }

  export type MultiAssetCreateWithoutUtxoInput = {
    policyId: string
    assetName: string
    quantity: bigint | number
  }

  export type MultiAssetUncheckedCreateWithoutUtxoInput = {
    id?: number
    policyId: string
    assetName: string
    quantity: bigint | number
  }

  export type MultiAssetCreateOrConnectWithoutUtxoInput = {
    where: MultiAssetWhereUniqueInput
    create: XOR<MultiAssetCreateWithoutUtxoInput, MultiAssetUncheckedCreateWithoutUtxoInput>
  }

  export type MultiAssetCreateManyUtxoInputEnvelope = {
    data: MultiAssetCreateManyUtxoInput | MultiAssetCreateManyUtxoInput[]
    skipDuplicates?: boolean
  }

  export type NetworkTxOutputCreateWithoutUtxoInput = {
    validator: $Enums.NetworkValidator
    createdAt?: Date | string
  }

  export type NetworkTxOutputUncheckedCreateWithoutUtxoInput = {
    id?: number
    validator: $Enums.NetworkValidator
    createdAt?: Date | string
  }

  export type NetworkTxOutputCreateOrConnectWithoutUtxoInput = {
    where: NetworkTxOutputWhereUniqueInput
    create: XOR<NetworkTxOutputCreateWithoutUtxoInput, NetworkTxOutputUncheckedCreateWithoutUtxoInput>
  }

  export type NetworkTxOutputCreateManyUtxoInputEnvelope = {
    data: NetworkTxOutputCreateManyUtxoInput | NetworkTxOutputCreateManyUtxoInput[]
    skipDuplicates?: boolean
  }

  export type LocalStateTxOutputCreateWithoutUtxoInput = {
    localStatePolicy: string
    validator: $Enums.ScriptCategory
    createdAt?: Date | string
  }

  export type LocalStateTxOutputUncheckedCreateWithoutUtxoInput = {
    id?: number
    localStatePolicy: string
    validator: $Enums.ScriptCategory
    createdAt?: Date | string
  }

  export type LocalStateTxOutputCreateOrConnectWithoutUtxoInput = {
    where: LocalStateTxOutputWhereUniqueInput
    create: XOR<LocalStateTxOutputCreateWithoutUtxoInput, LocalStateTxOutputUncheckedCreateWithoutUtxoInput>
  }

  export type LocalStateTxOutputCreateManyUtxoInputEnvelope = {
    data: LocalStateTxOutputCreateManyUtxoInput | LocalStateTxOutputCreateManyUtxoInput[]
    skipDuplicates?: boolean
  }

  export type MultiAssetUpsertWithWhereUniqueWithoutUtxoInput = {
    where: MultiAssetWhereUniqueInput
    update: XOR<MultiAssetUpdateWithoutUtxoInput, MultiAssetUncheckedUpdateWithoutUtxoInput>
    create: XOR<MultiAssetCreateWithoutUtxoInput, MultiAssetUncheckedCreateWithoutUtxoInput>
  }

  export type MultiAssetUpdateWithWhereUniqueWithoutUtxoInput = {
    where: MultiAssetWhereUniqueInput
    data: XOR<MultiAssetUpdateWithoutUtxoInput, MultiAssetUncheckedUpdateWithoutUtxoInput>
  }

  export type MultiAssetUpdateManyWithWhereWithoutUtxoInput = {
    where: MultiAssetScalarWhereInput
    data: XOR<MultiAssetUpdateManyMutationInput, MultiAssetUncheckedUpdateManyWithoutUtxoInput>
  }

  export type MultiAssetScalarWhereInput = {
    AND?: MultiAssetScalarWhereInput | MultiAssetScalarWhereInput[]
    OR?: MultiAssetScalarWhereInput[]
    NOT?: MultiAssetScalarWhereInput | MultiAssetScalarWhereInput[]
    id?: IntFilter<"MultiAsset"> | number
    policyId?: StringFilter<"MultiAsset"> | string
    assetName?: StringFilter<"MultiAsset"> | string
    quantity?: BigIntFilter<"MultiAsset"> | bigint | number
    utxoId?: IntNullableFilter<"MultiAsset"> | number | null
  }

  export type NetworkTxOutputUpsertWithWhereUniqueWithoutUtxoInput = {
    where: NetworkTxOutputWhereUniqueInput
    update: XOR<NetworkTxOutputUpdateWithoutUtxoInput, NetworkTxOutputUncheckedUpdateWithoutUtxoInput>
    create: XOR<NetworkTxOutputCreateWithoutUtxoInput, NetworkTxOutputUncheckedCreateWithoutUtxoInput>
  }

  export type NetworkTxOutputUpdateWithWhereUniqueWithoutUtxoInput = {
    where: NetworkTxOutputWhereUniqueInput
    data: XOR<NetworkTxOutputUpdateWithoutUtxoInput, NetworkTxOutputUncheckedUpdateWithoutUtxoInput>
  }

  export type NetworkTxOutputUpdateManyWithWhereWithoutUtxoInput = {
    where: NetworkTxOutputScalarWhereInput
    data: XOR<NetworkTxOutputUpdateManyMutationInput, NetworkTxOutputUncheckedUpdateManyWithoutUtxoInput>
  }

  export type NetworkTxOutputScalarWhereInput = {
    AND?: NetworkTxOutputScalarWhereInput | NetworkTxOutputScalarWhereInput[]
    OR?: NetworkTxOutputScalarWhereInput[]
    NOT?: NetworkTxOutputScalarWhereInput | NetworkTxOutputScalarWhereInput[]
    id?: IntFilter<"NetworkTxOutput"> | number
    utxoId?: IntFilter<"NetworkTxOutput"> | number
    validator?: EnumNetworkValidatorFilter<"NetworkTxOutput"> | $Enums.NetworkValidator
    createdAt?: DateTimeFilter<"NetworkTxOutput"> | Date | string
  }

  export type LocalStateTxOutputUpsertWithWhereUniqueWithoutUtxoInput = {
    where: LocalStateTxOutputWhereUniqueInput
    update: XOR<LocalStateTxOutputUpdateWithoutUtxoInput, LocalStateTxOutputUncheckedUpdateWithoutUtxoInput>
    create: XOR<LocalStateTxOutputCreateWithoutUtxoInput, LocalStateTxOutputUncheckedCreateWithoutUtxoInput>
  }

  export type LocalStateTxOutputUpdateWithWhereUniqueWithoutUtxoInput = {
    where: LocalStateTxOutputWhereUniqueInput
    data: XOR<LocalStateTxOutputUpdateWithoutUtxoInput, LocalStateTxOutputUncheckedUpdateWithoutUtxoInput>
  }

  export type LocalStateTxOutputUpdateManyWithWhereWithoutUtxoInput = {
    where: LocalStateTxOutputScalarWhereInput
    data: XOR<LocalStateTxOutputUpdateManyMutationInput, LocalStateTxOutputUncheckedUpdateManyWithoutUtxoInput>
  }

  export type LocalStateTxOutputScalarWhereInput = {
    AND?: LocalStateTxOutputScalarWhereInput | LocalStateTxOutputScalarWhereInput[]
    OR?: LocalStateTxOutputScalarWhereInput[]
    NOT?: LocalStateTxOutputScalarWhereInput | LocalStateTxOutputScalarWhereInput[]
    id?: IntFilter<"LocalStateTxOutput"> | number
    utxoId?: IntFilter<"LocalStateTxOutput"> | number
    localStatePolicy?: StringFilter<"LocalStateTxOutput"> | string
    validator?: EnumScriptCategoryFilter<"LocalStateTxOutput"> | $Enums.ScriptCategory
    createdAt?: DateTimeFilter<"LocalStateTxOutput"> | Date | string
  }

  export type UtxoCreateWithoutMultiAssetInput = {
    txHash: string
    index: number
    address: string
    plutusData?: string | null
    scriptRef?: string | null
    coin: bigint | number
    NetworkTxOutput?: NetworkTxOutputCreateNestedManyWithoutUtxoInput
    LocalStateTxOutput?: LocalStateTxOutputCreateNestedManyWithoutUtxoInput
  }

  export type UtxoUncheckedCreateWithoutMultiAssetInput = {
    id?: number
    txHash: string
    index: number
    address: string
    plutusData?: string | null
    scriptRef?: string | null
    coin: bigint | number
    NetworkTxOutput?: NetworkTxOutputUncheckedCreateNestedManyWithoutUtxoInput
    LocalStateTxOutput?: LocalStateTxOutputUncheckedCreateNestedManyWithoutUtxoInput
  }

  export type UtxoCreateOrConnectWithoutMultiAssetInput = {
    where: UtxoWhereUniqueInput
    create: XOR<UtxoCreateWithoutMultiAssetInput, UtxoUncheckedCreateWithoutMultiAssetInput>
  }

  export type UtxoUpsertWithoutMultiAssetInput = {
    update: XOR<UtxoUpdateWithoutMultiAssetInput, UtxoUncheckedUpdateWithoutMultiAssetInput>
    create: XOR<UtxoCreateWithoutMultiAssetInput, UtxoUncheckedCreateWithoutMultiAssetInput>
    where?: UtxoWhereInput
  }

  export type UtxoUpdateToOneWithWhereWithoutMultiAssetInput = {
    where?: UtxoWhereInput
    data: XOR<UtxoUpdateWithoutMultiAssetInput, UtxoUncheckedUpdateWithoutMultiAssetInput>
  }

  export type UtxoUpdateWithoutMultiAssetInput = {
    txHash?: StringFieldUpdateOperationsInput | string
    index?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    plutusData?: NullableStringFieldUpdateOperationsInput | string | null
    scriptRef?: NullableStringFieldUpdateOperationsInput | string | null
    coin?: BigIntFieldUpdateOperationsInput | bigint | number
    NetworkTxOutput?: NetworkTxOutputUpdateManyWithoutUtxoNestedInput
    LocalStateTxOutput?: LocalStateTxOutputUpdateManyWithoutUtxoNestedInput
  }

  export type UtxoUncheckedUpdateWithoutMultiAssetInput = {
    id?: IntFieldUpdateOperationsInput | number
    txHash?: StringFieldUpdateOperationsInput | string
    index?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    plutusData?: NullableStringFieldUpdateOperationsInput | string | null
    scriptRef?: NullableStringFieldUpdateOperationsInput | string | null
    coin?: BigIntFieldUpdateOperationsInput | bigint | number
    NetworkTxOutput?: NetworkTxOutputUncheckedUpdateManyWithoutUtxoNestedInput
    LocalStateTxOutput?: LocalStateTxOutputUncheckedUpdateManyWithoutUtxoNestedInput
  }

  export type InstanceCreateWithoutInstancePolicyInput = {
    type: $Enums.ScriptCategory
    hash: string
    address: string
    createdAt?: Date | string
  }

  export type InstanceUncheckedCreateWithoutInstancePolicyInput = {
    id?: number
    type: $Enums.ScriptCategory
    hash: string
    address: string
    createdAt?: Date | string
  }

  export type InstanceCreateOrConnectWithoutInstancePolicyInput = {
    where: InstanceWhereUniqueInput
    create: XOR<InstanceCreateWithoutInstancePolicyInput, InstanceUncheckedCreateWithoutInstancePolicyInput>
  }

  export type InstanceCreateManyInstancePolicyInputEnvelope = {
    data: InstanceCreateManyInstancePolicyInput | InstanceCreateManyInstancePolicyInput[]
    skipDuplicates?: boolean
  }

  export type InstanceUpsertWithWhereUniqueWithoutInstancePolicyInput = {
    where: InstanceWhereUniqueInput
    update: XOR<InstanceUpdateWithoutInstancePolicyInput, InstanceUncheckedUpdateWithoutInstancePolicyInput>
    create: XOR<InstanceCreateWithoutInstancePolicyInput, InstanceUncheckedCreateWithoutInstancePolicyInput>
  }

  export type InstanceUpdateWithWhereUniqueWithoutInstancePolicyInput = {
    where: InstanceWhereUniqueInput
    data: XOR<InstanceUpdateWithoutInstancePolicyInput, InstanceUncheckedUpdateWithoutInstancePolicyInput>
  }

  export type InstanceUpdateManyWithWhereWithoutInstancePolicyInput = {
    where: InstanceScalarWhereInput
    data: XOR<InstanceUpdateManyMutationInput, InstanceUncheckedUpdateManyWithoutInstancePolicyInput>
  }

  export type InstanceScalarWhereInput = {
    AND?: InstanceScalarWhereInput | InstanceScalarWhereInput[]
    OR?: InstanceScalarWhereInput[]
    NOT?: InstanceScalarWhereInput | InstanceScalarWhereInput[]
    id?: IntFilter<"Instance"> | number
    type?: EnumScriptCategoryFilter<"Instance"> | $Enums.ScriptCategory
    hash?: StringFilter<"Instance"> | string
    address?: StringFilter<"Instance"> | string
    instancePolicyId?: IntFilter<"Instance"> | number
    createdAt?: DateTimeFilter<"Instance"> | Date | string
  }

  export type MultiAssetCreateManyUtxoInput = {
    id?: number
    policyId: string
    assetName: string
    quantity: bigint | number
  }

  export type NetworkTxOutputCreateManyUtxoInput = {
    id?: number
    validator: $Enums.NetworkValidator
    createdAt?: Date | string
  }

  export type LocalStateTxOutputCreateManyUtxoInput = {
    id?: number
    localStatePolicy: string
    validator: $Enums.ScriptCategory
    createdAt?: Date | string
  }

  export type MultiAssetUpdateWithoutUtxoInput = {
    policyId?: StringFieldUpdateOperationsInput | string
    assetName?: StringFieldUpdateOperationsInput | string
    quantity?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type MultiAssetUncheckedUpdateWithoutUtxoInput = {
    id?: IntFieldUpdateOperationsInput | number
    policyId?: StringFieldUpdateOperationsInput | string
    assetName?: StringFieldUpdateOperationsInput | string
    quantity?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type MultiAssetUncheckedUpdateManyWithoutUtxoInput = {
    id?: IntFieldUpdateOperationsInput | number
    policyId?: StringFieldUpdateOperationsInput | string
    assetName?: StringFieldUpdateOperationsInput | string
    quantity?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type NetworkTxOutputUpdateWithoutUtxoInput = {
    validator?: EnumNetworkValidatorFieldUpdateOperationsInput | $Enums.NetworkValidator
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NetworkTxOutputUncheckedUpdateWithoutUtxoInput = {
    id?: IntFieldUpdateOperationsInput | number
    validator?: EnumNetworkValidatorFieldUpdateOperationsInput | $Enums.NetworkValidator
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NetworkTxOutputUncheckedUpdateManyWithoutUtxoInput = {
    id?: IntFieldUpdateOperationsInput | number
    validator?: EnumNetworkValidatorFieldUpdateOperationsInput | $Enums.NetworkValidator
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LocalStateTxOutputUpdateWithoutUtxoInput = {
    localStatePolicy?: StringFieldUpdateOperationsInput | string
    validator?: EnumScriptCategoryFieldUpdateOperationsInput | $Enums.ScriptCategory
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LocalStateTxOutputUncheckedUpdateWithoutUtxoInput = {
    id?: IntFieldUpdateOperationsInput | number
    localStatePolicy?: StringFieldUpdateOperationsInput | string
    validator?: EnumScriptCategoryFieldUpdateOperationsInput | $Enums.ScriptCategory
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LocalStateTxOutputUncheckedUpdateManyWithoutUtxoInput = {
    id?: IntFieldUpdateOperationsInput | number
    localStatePolicy?: StringFieldUpdateOperationsInput | string
    validator?: EnumScriptCategoryFieldUpdateOperationsInput | $Enums.ScriptCategory
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InstanceCreateManyInstancePolicyInput = {
    id?: number
    type: $Enums.ScriptCategory
    hash: string
    address: string
    createdAt?: Date | string
  }

  export type InstanceUpdateWithoutInstancePolicyInput = {
    type?: EnumScriptCategoryFieldUpdateOperationsInput | $Enums.ScriptCategory
    hash?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InstanceUncheckedUpdateWithoutInstancePolicyInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumScriptCategoryFieldUpdateOperationsInput | $Enums.ScriptCategory
    hash?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InstanceUncheckedUpdateManyWithoutInstancePolicyInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumScriptCategoryFieldUpdateOperationsInput | $Enums.ScriptCategory
    hash?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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
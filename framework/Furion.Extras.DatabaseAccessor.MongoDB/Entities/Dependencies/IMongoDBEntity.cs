﻿// Copyright (c) 2020-2021 百小僧, Baiqian Co.,Ltd.
// Furion is licensed under Mulan PSL v2.
// You can use this software according to the terms and conditions of the Mulan PSL v2.
// You may obtain a copy of Mulan PSL v2 at:
//             https://gitee.com/dotnetchina/Furion/blob/master/LICENSE
// THIS SOFTWARE IS PROVIDED ON AN "AS IS" BASIS, WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO NON-INFRINGEMENT, MERCHANTABILITY OR FIT FOR A PARTICULAR PURPOSE.
// See the Mulan PSL v2 for more details.

using MongoDB.Bson.Serialization.Attributes;

namespace MongoDB.Driver
{
    /// <summary>
    /// 带实体主键的父 MongoDbEntity
    /// </summary>
    public interface IMongoDBEntity<TKey>
    {
        /// <summary>
        /// 主键Id
        /// </summary>
        [BsonId]
        TKey Id { get; set; }
    }
}
﻿// Copyright (c) 2020-2021 百小僧, Baiqian Co.,Ltd.
// Furion is licensed under Mulan PSL v2.
// You can use this software according to the terms and conditions of the Mulan PSL v2.
// You may obtain a copy of Mulan PSL v2 at:
//             https://gitee.com/dotnetchina/Furion/blob/master/LICENSE
// THIS SOFTWARE IS PROVIDED ON AN "AS IS" BASIS, WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO NON-INFRINGEMENT, MERCHANTABILITY OR FIT FOR A PARTICULAR PURPOSE.
// See the Mulan PSL v2 for more details.

using Furion.DependencyInjection;
using System.ComponentModel;

namespace Furion.DistributedIDGenerator
{
    /// <summary>
    /// 连续 GUID 类型选项
    /// </summary>
    [SuppressSniffer]
    public enum SequentialGuidType
    {
        /// <summary>
        /// 标准连续 GUID 字符串
        /// </summary>
        [Description("标准连续 GUID 字符串")]
        SequentialAsString,

        /// <summary>
        /// Byte 数组类型的连续 `GUID` 字符串
        /// </summary>
        [Description("Byte 数组类型的连续 `GUID` 字符串")]
        SequentialAsBinary,

        /// <summary>
        /// 连续部分在末尾展示
        /// </summary>
        [Description("连续部分在末尾展示")]
        SequentialAtEnd
    }
}
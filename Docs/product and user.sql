USE [Sharlot]
GO
/****** Object:  Table [dbo].[Products]    Script Date: 2022/05/13 07:23:02 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Products](
	[productId] [int] IDENTITY(1,1) NOT NULL,
	[productName] [nvarchar](max) NOT NULL,
	[description] [nvarchar](max) NOT NULL,
	[price] [real] NOT NULL,
	[imagefilename] [nvarchar](max) NOT NULL,
 CONSTRAINT [PK_Products] PRIMARY KEY CLUSTERED 
(
	[productId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Users]    Script Date: 2022/05/13 07:23:02 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Users](
	[customerId] [int] IDENTITY(1,1) NOT NULL,
	[customerName] [nvarchar](max) NOT NULL,
	[customerAddress] [nvarchar](max) NOT NULL,
	[emailAddress] [nvarchar](max) NOT NULL,
	[cellphoneNo] [nvarchar](max) NOT NULL,
	[userName] [nvarchar](max) NOT NULL,
	[password] [nvarchar](max) NOT NULL,
	[creditCardInfo] [nvarchar](max) NOT NULL,
	[shippingInfo] [nvarchar](max) NOT NULL,
 CONSTRAINT [PK_Users] PRIMARY KEY CLUSTERED 
(
	[customerId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO

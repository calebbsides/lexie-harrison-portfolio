variable "aws_region" {
  description = "AWS region for the S3 bucket and supporting resources"
  type        = string
  default     = "us-east-1"
}

variable "bucket_name" {
  description = "Name of the S3 bucket for static website assets"
  type        = string
}

variable "custom_domain" {
  description = "Optional custom domain name (e.g. portfolio.example.com). Leave empty to use the default CloudFront domain."
  type        = string
  default     = ""
}

variable "route53_zone_id" {
  description = "Route 53 hosted zone ID for the custom domain. Required only when custom_domain is set."
  type        = string
  default     = ""
}

variable "github_repo" {
  description = "GitHub repository in owner/repo format (e.g. myuser/counseling-portfolio)"
  type        = string
}

variable "github_oidc_provider_arn" {
  description = "ARN of an existing GitHub OIDC provider. Leave empty to create a new one."
  type        = string
  default     = ""
}

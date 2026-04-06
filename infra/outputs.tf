output "cloudfront_domain_name" {
  description = "The CloudFront distribution domain name (use this as the website URL)"
  value       = aws_cloudfront_distribution.portfolio.domain_name
}

output "cloudfront_distribution_id" {
  description = "The CloudFront distribution ID (used for cache invalidation in CI/CD)"
  value       = aws_cloudfront_distribution.portfolio.id
}

output "s3_bucket_name" {
  description = "The S3 bucket name (used for asset upload in CI/CD)"
  value       = aws_s3_bucket.portfolio.bucket
}

output "website_url" {
  description = "The website URL (custom domain if set, otherwise CloudFront domain)"
  value       = var.custom_domain != "" ? "https://${var.custom_domain}" : "https://${aws_cloudfront_distribution.portfolio.domain_name}"
}

output "github_actions_role_arn" {
  description = "IAM role ARN to set as AWS_ROLE_ARN secret in GitHub"
  value       = aws_iam_role.github_actions_deploy.arn
}
